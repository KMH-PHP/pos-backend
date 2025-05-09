require("dotenv").config();

const config = Object.freeze({
    port: process.env.PORT || 3000,
    databaseURL: process.env.MONGODB_URL || "mongodb://localhost:2701",
    nodeEnv: process.env.NODE_ENV || "development",
    accessTokenSecret: process.env.JWT_SECRET,
    razorpayWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET,
});

module.exports = config;