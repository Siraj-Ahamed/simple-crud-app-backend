const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoutes = require("./routes/product.route.js");
const dotenv = require('dotenv')

const app = express();

dotenv.config()
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("HI from NODE SERVER!");
});

mongoose
    .connect(
       process.env.MONGO
    )
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.log("Connection failed");
        console.log(err);
    });
