
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const createHttpError = require('http-errors');
const cookieParser = require('cookie-parser');
const app = express();

 const PORT = config.port;
 connectDB();

 //middlewares
app.use(express.json()); // parse incoming request in json format
app.use(cookieParser()); // parse cookies

 //root endpoint
 app.get("/", (req, res) => {

   // const err = createHttpError(404, "Something went wrong!");
   // throw err;
    res.json({ message : "Hello from POS server" });
 })

 //other endpints
 app.use("/api/user", require("./routes/userRoute"));
 app.use("/api/order", require("./routes/orderRoute"));
 app.use("/api/table", require("./routes/tableRoute"));


 //global error handler
 app.use(globalErrorHandler);

 //server
 app.listen(PORT, () => {
    console.log(`POS server is listening on port ${PORT}`);
 })