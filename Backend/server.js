const express = require("express");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
require('dotenv').config();
const router = require("./routes/Auth.routes");
// Initialize Express app
const app = express();
const port = process.env.PORT || 8000;
//middelware
app.use(express.json());
//cors policy 


// const FrontendConnection = "http://localhost:5173";

// Mongo_db connection 
const mongodbConnection = require('./config/Mongo.db');
mongodbConnection();

// Routes
app.use('/v1/api' , router);


// Basic route for the server
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server is Listening`)
})