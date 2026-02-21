const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

const router = express.Router();


// EMAIL CHECK ROUTE
router.post("/checkEmail", async (req,res)=>{

    try{

        const {email} = req.body;

        if(!email){
            return res.status(400).json({
                message:"Email required"
            })
        }

        const user = await UserModel.findOne({email});

        // अगर user exist करता है
        if(user){

            const token = jwt.sign(
                {id:user._id,email:user.email},
                process.env.JWT_SECRET || "your_secret_key",
                {expiresIn:"7d"}
            )

            return res.json({
                isRegistered:true,
                token,
                userName:user.name,
                userId:user._id
            })

        }

        // user exist नहीं करता

        res.json({
            isRegistered:false
        })

    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message:"Server error"
        })
    }

})


// REGISTER USER

                router.post("/register", async (req,res)=>{

                try{

                const {name,email,password} = req.body;

                if(!name || !email || !password){
                return res.status(400).json({
                message:"All fields required"
                })
                }

                const existingUser = await UserModel.findOne({email})

                if(existingUser){
                return res.status(400).json({
                message:"Email already registered"
                })
                }

                const hashedPassword = await bcrypt.hash(password,10)

                const newUser = await UserModel.create({

                name,
                email,
                password:hashedPassword

                })


                const token = jwt.sign(
                {id:newUser._id,email:newUser.email},
                process.env.JWT_SECRET || "your_secret_key",
                {expiresIn:"7d"}
                )

                res.json({

                message:"Registered",
                token,
                userName:newUser.name,
                userId:newUser._id

                })


                }
                catch(err){

                console.log(err)

                res.status(500).json({
                message:"Registration failed"
            })
              }
                })

                router.post("/login", async(req, res)=>{
                    try{
                        const {email, password} = req.body;

                        if(!email || !password) {
                            return res.status(400).json({
                                message:"Email and password required"
                            })
                        }
                        const user = await UserModel.findOne({email});

                        if(!user){
                            return res.status(401).json({
                                message:"Invalid email or password"
                            })
                        }
                        const isPasswordValid = await bcrypt.compare(
                            password,
                            user.password
                        )
                        if(!isPasswordValid){
                            return res.status(401).json({
                                message:"Invalid email or password"
                            })
                        }
                        const token = jwt.sign(
                            {id:user._id,email:user.email},
                            process.env.JWT_SECRET || "your_secret_key",
                            {expiresIn:"7d"}
                        )
                        res.json({
                            message:"Login successful",
                            token,
                            user:{
                                userId:user._id,
                                name:user.name,
                                email:user.email
                            }
                        })
                    }
                    catch(err){
                        console.log(err)
                        res.status(500).json({
                            message:"Server error"
                        })
                    }
                })


                module.exports = router;