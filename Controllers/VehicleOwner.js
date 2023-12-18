const express = require('express');
const bcrypt = require('bcryptjs');
const { hashPassword,generateAccessToken} = require('../helper');
const SignUpOwnerSchema = require('../Model/SignUpOwnerModel');

const router = express.Router();

// Registration Route
router.post("/OwnerSignup", async (req, res) => {
  try {
    const existNIC = await SignUpOwnerSchema.findOne({ Nic: req.body.Nic });

    if (existNIC) {
      return res.status(401).json("NIC already exists");
    }

    const hashPwd = await hashPassword(req.body.OwnerPassword);

    const signUpData = new SignUpOwnerSchema({
      OwnerName: req.body.OwnerName,
      Nic: req.body.Nic,
      PhoneNumber:req.body.PhoneNumber,
      OwnerPassword: hashPwd,
    });

    const postUser = await signUpData.save();

    if (postUser) {
      return res.status(200).json("Registered successfully");
    }
  } catch (err) {
    if (err.code === 11000) {
      return res.status(401).json("Duplicate key found");
    }
    return res.status(500).json(err.message || err);
  }
});

// Login Route
router.post("/Ownerlogin", async (req, res) => {
  try {
    const validData = await SignUpOwnerSchema.findOne({ PhoneNumber: req.body.PhoneNumber }).select('OwnerPassword Nic OwnerName');
    console.log(validData);

    if (!validData) {
      return res.status(400).json("Invalid email");
    }

    const isPasswordValid = await bcrypt.compare(req.body.OwnerPassword, validData.OwnerPassword);


    if (isPasswordValid) {
      const userToken = generateAccessToken(validData);
      res.header('Authorization', `Bearer ${userToken}`).json({ token: userToken });
    } else {
      return res.status(400).json("Invalid password");
    }
  } catch (err) {
    return res.status(500).json(err.message || err);
  }
});


module.exports = router;
