const asyncHandler = require("express-async-handler");
const { Feedback } = require("../models/feedback");
// var bcrypt = require("bcryptjs");
// const { generateToken } = require("../utils/generateToken");

exports.addFeedback = asyncHandler(async (req, res) => {
	const {
		email,
		name,
		instructorName,

		feedback,
	} = req.body;
	console.log(req.body, "DATA");

	// res.json("reached");
	// const feedbackExist = await Feedback.findOne({ email: email });
	// if (feedbackExist) {
	// 	res.status(401);
	// 	throw new Error("Feedback already exist");
	// } else {
	// console.log(req.body);
	const newFeedback = await new Feedback({
		userName: userName,

		name: name,
		email: email,
		feedback: feedback,
	});
	// console.log(lecture, "LOG");
	if (newFeedback) {
		await newFeedback.save();
		res.json(newFeedback);
	} else {
		throw new Error("Feedback not found");
	}
	// }
});

exports.getFeedbackForInstructor = asyncHandler(async (req, res) => {
	try {
		const feedbackList = await Feedback.find({email:req.params.email});
		res.json(feedbackList);
	} catch (e) {
		throw new Error(e.message);
	}
});
