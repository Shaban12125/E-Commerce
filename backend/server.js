const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        console.log("Database Name:", mongoose.connection.name);
    })
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
    });

app.get("/test", async(req, res) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        res.json(collections);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

console.log("JWT_SECRET =", process.env.JWT_SECRET);