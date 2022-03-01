const asyncHandler = require("express-async-handler");
const { Lectures } = require("../models/lecture");
// var bcrypt = require("bcryptjs");
// const { generateToken } = require("../utils/generateToken");

exports.addLecture = asyncHandler(async (req, res) => {
	const {
		subjectName,
		instructorName,

		duration,

		language,

		meetingId,
		description,
	} = req.body;
	// console.log(req.body, "DATA");
	// res.json("reached");
	const lectureExist = await Lectures.findOne({ meetingId: meetingId });
	if (lectureExist) {
		res.status(401);
		throw new Error("Lecture already exist");
	} else {
		// console.log(req.body);
		const lecture = await new Lectures({
			subjectName: subjectName,
			instructorName: instructorName,

			duration: duration,
			meetingId: meetingId,
			language: language,
			description: description,
		});
		// console.log(lecture, "LOG");
		if (lecture) {
			await lecture.save();
			res.json(lecture);
		} else {
			throw new Error("Lecture not found");
		}
	}
});
