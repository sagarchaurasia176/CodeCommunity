const express = require("express");
const router = express.Router();
const {
  LoginAuth,
  RegisterAuths,
} = require("../controller/Authentication.controller");
const { TestMiddleWares } = require("../Middleware/Authe.Middleware");

// middleware auths
router.post("/test", TestMiddleWares, (req, res) => {
  res.json({
    message: "wlcome sagar [test]",
  });
});

// SIMPLE AUTH
router.post("/Register", TestMiddleWares, RegisterAuths, (req, res) => {
  res.json({
    message: "wlcome register",
  });
});
router.post("/login", TestMiddleWares, LoginAuth, (req, res) => {
  res.json({
    message: "wlcome Login ",
  });
});

module.exports = router;
