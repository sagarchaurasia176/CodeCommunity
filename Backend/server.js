const express = require("express");
const app = express();
require("dotenv").config();

// listen parts apply here
app.listen(process.env.PORT, () => {
  console.log("server is start here...");
});
