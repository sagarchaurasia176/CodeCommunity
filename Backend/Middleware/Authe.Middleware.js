const jwt = require("jsonwebtoken");
require("dotenv").config();

// Team Middlewares
exports.TestMiddleWares = async (req, res,next) => {
  try {
    const jwtToken = req.body.token || req.cookie.token
    console.log("this is body token")
    console.log(req.body.token)
    console.log("this is cookie")
    console.log(req.cookie.token);

    //lets verify the token here 
    const tokenVerify = jwt.verify(jwtToken , process.env.JWT_SECRET);
    //decode it 
    req.usersData = tokenVerify;
    next();
  } catch (er) {
    return res.status(404).json({
      success: false,
      message: "error in token verify , your are not test user",
      error: er.message,
    });
  }
};

//user
// User Middleware
exports.UserMiddelwares = async (req, res, next) => {
    try {
      // Check if the user has the "User" role
      if (req.user.role !== "User") {
        return res.status(403).json({
          success: false,
          message: "Protected route, only accessible by Users",
        });
      }
      next();
    } catch (er) {
      return res.status(500).json({
        success: false,
        message: "Access denied for admin",
        error: er.message,
      });
    }
  };
  
  // Admin Middleware
  exports.AdminMiddlewares = async (req, res, next) => {
    try {
      // Check if the user has the "Admin" role
      if (req.user.role !== "Admin") {
        return res.status(403).json({
          success: false,
          message: "Protected route, only accessible by Admin",
        });
      }
      next();
    } catch (er) {
      return res.status(500).json({
        success: false,
        message: "Access denied for User",
        error: er.message,
      });
    }
  };
//admin
