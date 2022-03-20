const asyncHandler = require("express-async-handler");
const { Feedback } = require("../models/feedback");
// var bcrypt = require("bcryptjs");
// const { generateToken } = require("../utils/generateToken");

exports.addFeedback = asyncHandler(async (req, res) => {
	const {
		email,
		name,
		userName,
		feedback,
	} = req.body;

	const newFeedback = await new Feedback({
		userName: userName,
		name: name,
		email: email,
		feedback: feedback,
	});
	if (newFeedback) {
		await newFeedback.save();
		res.json(newFeedback);
	} else {
		throw new Error("Feedback not found");
	}
});

exports.getFeedbackForInstructor = asyncHandler(async (req, res) => {
	try {
		const feedbackList = await Feedback.find({userName: req.params.userName});
		res.json(feedbackList);
	} catch (e) {
		throw new Error(e.message);
	}
});
