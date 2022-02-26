const express = require("express");
const coursesRouter = express.Router();
// const { authProtect, admin } = require("../middleware/authMiddleware");

// const productData = require("../data/product");
const { addCourse } = require("../controller/course");
//fetch product data from mogodb
// userRouter.post("/login", authUser);
// userRouter.get("/profile", authProtect, getUserProfile);
coursesRouter.post("/add", addCourse);

module.exports = coursesRouter;
