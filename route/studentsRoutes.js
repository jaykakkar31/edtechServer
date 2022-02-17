const express = require("express");
const studentRouter = express.Router();
// const { authProtect, admin } = require("../middleware/authMiddleware");

// const productData = require("../data/product");
const { registerStudent } = require("../controller/student");
//fetch product data from mogodb
// userRouter.post("/login", authUser);
// userRouter.get("/profile", authProtect, getUserProfile);
studentRouter.post("/register", registerStudent);

module.exports = studentRouter;
