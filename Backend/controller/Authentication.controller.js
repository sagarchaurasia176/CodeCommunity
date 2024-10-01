const User = require("../model/Authentication.schema");
const jwt_Token = require("jsonwebtoken");
const bycrypt = require("bcrypt");
require("dotenv").config();

//register page
exports.RegisterAuths = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    //req file from the cloudinary
    // Check if all required fields are provided
    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ success: false, msg: "Please fill all fields" });
    }
    // This goes to the db and check the data
    const checkAdditionalDetailInDb = await User.findOne({ email: email });
    if (checkAdditionalDetailInDb) {
      return res.status(400).json({
        success: false,
        msg: "Please enter valid email",
      });
    }
    
    // Hash the password
    const salt = await bycrypt.genSalt(6);
    const hashedPassword = await bycrypt.hash(password, salt);
    //create the entry into the db
    const CreateEnteryIntoTheRegisterPage = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Send the resopnse  to the db
    return res.status(201).json({
      success: true,
      msg: "User registered successfully!",
      data: CreateEnteryIntoTheRegisterPage,
    });
  } catch (er) {
    return res.status(404).json({
      success: false,
      msg: "Error while Registered kindly try again from backend side",
      error: er.message,
    });
  }
};

//login page
exports.LoginAuth = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    // Check if all required fields are provided
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ success: false, msg: "Please fill in all fields" });
    }
    // This goes to the db and check the data
    const usersData = await User.findOne({ email: email });
    if (!usersData) {
      return res.status(400).json({
        success: false,
        msg: "Please enter valid email",
      });
    }
    // 2. Compare the provided password with the hashed password in the database
    let isPasswordMatch = await bycrypt.compare(password, usersData.password);
    if (!isPasswordMatch) {
      return res.json({ message: "Invalid password" });
    }

    //create jwt with the cookies
    const payload = {
      id: usersData?._id,
      email: usersData?.email,
      role: usersData?.role,
    };
    if (await isPasswordMatch) {
      try {
        const token = await jwt_Token.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        // very usefull 
        usersData.token = token;
        usersData.password = undefined;

        //create the cookie
        const cookieData = {
          // httpOnly:true
          httpOnly: true,
          sameSite: "Strict",
          expiresIn: "2d",
        };
        return res
          .cookie("code-community", token, cookieData)
          .status(200)
          .json({
            success: true,
            message: "cookie stored",
            token,
            usersData,
          });
      } catch (er) {
        return res.status(404).json({
          success: false,
          msg: "password not matched with the jwt",
          error: er.message,
        });
      }
    }
  } catch (er) {
    return res.status(404).json({
      success: false,
      msg: "Error while login kindly try again from backend side",
      error: er.message,
    });
  }
};
