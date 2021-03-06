const express = require("express");
const coursesRouter = express.Router();
// const { authProtect, admin } = require("../middleware/authMiddleware");

// const productData = require("../data/product");
const { addCourse, getAllCourses } = require("../controller/course");
const { authProtect } = require("../middleware/educatorAuthMiddleware");
//fetch product data from mogodb
// userRouter.post("/login", authUser);
// userRouter.get("/profile", authProtect, getUserProfile);
coursesRouter.post("/add" ,addCourse);
coursesRouter.get("/get", getAllCourses);


module.exports = coursesRouter;
