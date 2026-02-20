const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

const router = express.Router();

let OtpStore = {};

//Send OTP
router.post("/sendOtp", (req, res) =>{
    const { phone } = req.body;

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    OtpStore[phone] = otp;

    console.log(`OTP for ${phone} is ${otp}`);

    res.send({message: "OTP sent successfully"});
});

//Verify OTP
router.post("/verifyOtp", async (req, res)=>{
    try{
        const{phone, otp} = req.body;

        if(OtpStore[phone] == otp){
            // OTP is correct, check if user is registered
            const user = await UserModel.findOne({phone});
            
            if(user){
                // User is registered - generate token
                const token = jwt.sign(
                    {phone: user.phone, id: user._id},
                    process.env.JWT_SECRET || "your_secret_key",
                    {expiresIn: "7d"}
                );
                
                delete OtpStore[phone];
                
                return res.json({
                    message: "OTP verified successfully",
                    isRegistered: true,
                    token,
                    userName: user.name,
                    userId: user._id
                });
            } else {
                // User not registered - send isRegistered: false
                delete OtpStore[phone];
                
                return res.json({
                    message: "OTP verified successfully",
                    isRegistered: false
                });
            }
        }
        else{
            res.status(400).json({message: "Invalid OTP"});
        }
    }
    catch(err){
        console.error("Verify OTP Error:", err);
        res.status(500).json({message: "Error verifying OTP"});
    }
});

//Register User
router.post("/register", async (req, res) => {
  try {
    const { phone, name, email, password } = req.body;

    if (!phone || !name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({phone});
    if(existingUser){
      return res.status(400).json({message: "Phone number already registered"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      phone,
      name,
      email,
      password: hashedPassword,
    });

    // Generate token after registration
    const token = jwt.sign(
      {phone: newUser.phone, id: newUser._id},
      process.env.JWT_SECRET || "your_secret_key",
      {expiresIn: "7d"}
    );

    res.json({ 
      message: "User registered successfully",
      token,
      userName: newUser.name,
      userId: newUser._id
    });

  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Registration failed" });
  }
});

//Login User with phone and password
router.post("/login", async (req, res) => {
  try {
    const { phone, password } = req.body;

   
    if (!phone || !password) {
      return res.status(400).json({ message: "Phone and password required" });
    }

    // Check if user exists
    const user = await UserModel.findOne({ phone });
    if (!user) {
      return res.status(401).json({ message: "Invalid phone or password" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid phone or password" });
    }

    // Generate token
    const token = jwt.sign(
      {userId: user._id, phone: user.phone},
      process.env.JWT_SECRET || "your_secret_key",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
       user: {
        userId: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email
      }
    });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;