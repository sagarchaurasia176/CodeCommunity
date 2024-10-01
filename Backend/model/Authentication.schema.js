const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define User Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
  },
  
});

// Export the User Model
const User = mongoose.model("user", userSchema);

module.exports = User;