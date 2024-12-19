const Razorpay = require("razorpay");
const express = require("express");
const app = express();

const razorpayInstance = new Razorpay({
    key_id: "rzp_test_YFasd7SnuZcubY", // Replace with your Razorpay Key ID
    key_secret: "fZfHRL0oxH3zmRStkci1TSbZ" // Replace with your Razorpay Secret Key
});

app.post("/payment", async (req, res) => {
    const { amount } = req.body; // Amount should be in paisa (e.g., 50000 for ₹500)
    
    try {
        const order = await razorpayInstance.orders.create({
            amount: amount, // Amount in paisa
            currency: "INR",
            receipt: "receipt#1",
        });
        res.json({
            id: order.id,
            currency: order.currency,
            amount: order.amount,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating Razorpay order");
    }
});
