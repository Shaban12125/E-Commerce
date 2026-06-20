const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async(req, res) => {

    const hashedPassword =
        await bcrypt.hash(req.body.password, 10);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    await user.save();

    res.json({
        message: "Registered"
    });

});

router.post("/login", async(req, res) => {

    const user =
        await User.findOne({
            email: req.body.email
        });

    if (!user)
        return res.status(400).json({
            message: "User not found"
        });

    const match =
        await bcrypt.compare(
            req.body.password,
            user.password
        );

    if (!match)
        return res.status(400).json({
            message: "Invalid credentials"
        });

    const token = jwt.sign({ id: user._id },
        process.env.JWT_SECRET
    );

    res.json({ token });
});

module.exports = router;