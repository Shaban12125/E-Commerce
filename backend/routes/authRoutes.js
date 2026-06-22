const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register User
router.post("/register", async(req, res) => {
    try {
        const existingUser = await User.findOne({
            email: req.body.email,
        });


        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered",
            });
        }

        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        );

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        await user.save();

        res.json({
            message: "Registered Successfully",
        });


    } catch (err) {
        console.error("Register Error:", err);


        res.status(500).json({
            message: "Server Error",
        });


    }
});

// Login User
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });


        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        const match = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!match) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        const token = jwt.sign({ id: user._id },
            "mysecretkey123"
        );

        res.json({
            token,
            message: "Login Successful",
        });


    } catch (err) {
        console.error("Login Error:", err);


        res.status(500).json({
            message: "Server Error",
        });


    }
});

module.exports = router;