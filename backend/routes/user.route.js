const express = require("express");
const router = express.Router();
const Users = require("../models/User.model");

router.post("/register", async (req, res) => {
    console.log(" hi abhishek");
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json("email and password is required");

        const newUser = new Users({
            email,
            password,
            // user_type:"Admin"
        });

        await newUser.save();
        res.status(201).json({ message: "user created successfully" });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json("email and password is required");

        const user= await Users.findOne({email});

        if(user){
            if(password===user.password){
                res.status(200).json({
                    user,
                    message:"User login successfully"
                });
            }
            else{
                res.status(401).json({message:"password not matched"});
            }
        }
        else{
            res.status(401).json({message:"User not found"});
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;

