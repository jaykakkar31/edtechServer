const express = require("express");
const educatorRouter = express.Router();
// const { authProtect, admin } = require("../middleware/authMiddleware");

// const productData = require("../data/product");
const { registerEducator, loginEducator } = require("../controller/educator");
//fetch product data from mogodb
// userRouter.post("/login", authUser);
// userRouter.get("/profile", authProtect, getUserProfile);
educatorRouter.post("/register", registerEducator);
educatorRouter.post("/login",loginEducator)

module.exports = educatorRouter;
