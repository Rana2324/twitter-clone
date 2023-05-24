//dependency
const { Router } = require("express");
const dotenv = require("dotenv");
const {
  getLogIn,
  getRegister,
} = require("../../controllers/auth/authControllers");
const decorateHtmlResponse = require("../../middlewares/common/decorateHtmlResponse");
const router = Router();

//config
dotenv.config();

// login router
router.get(
  "/login",
  decorateHtmlResponse(`Login - ${process.env.APP_NAME}`),
  getLogIn
);

//get register router

router.get(
  "/register",
  decorateHtmlResponse(`Login - ${process.env.APP_NAME}`),
  getRegister
);

//exports
module.exports = router;
