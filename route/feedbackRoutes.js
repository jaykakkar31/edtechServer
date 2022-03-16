const express = require("express");
const feedbackRouter = express.Router();
// const { authProtect, admin } = require("../middleware/authMiddleware");

// const productData = require("../data/product");
const {
	addFeedback,
	getFeedbackForInstructor,
} = require("../controller/feedback");
const { authProtect } = require("../middleware/educatorAuthMiddleware");
//fetch product data from mogodb
// userRouter.post("/login", authUser);
// userRouter.get("/profile", authProtect, getUserProfile);
feedbackRouter.post("/add", addFeedback);
feedbackRouter.get("/getdetails", getFeedbackForInstructor);


module.exports = feedbackRouter;
