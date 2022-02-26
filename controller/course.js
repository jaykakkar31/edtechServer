const asyncHandler = require("express-async-handler");
const { Course } = require("../models/course");
// var bcrypt = require("bcryptjs");
// const { generateToken } = require("../utils/generateToken");

exports.addCourse = asyncHandler(async (req, res) => {
	const {
		courseName,
		instructorName,
		courseImage,
		instructorImage,
		duration,
		level,
		language,
		price,
		curriculum,
		lectures,
		description,
	} = req.body;
	console.log(req.body, "DATA");
	// res.json("reached");
	const courseExist = await Course.findOne({ courseName: courseName });
	if (courseExist) {
		res.status(401);
		throw new Error("Course already exist");
	} else {
        console.log(req.body);
				const course = await new Course({
					courseName: courseName,
					instructorName: instructorName,
					courseImage: courseImage,
					instructorImage: instructorImage,
					duration: duration,
					level: level,
					language: language,
					price: price,
					curriculum: curriculum,
					lectures: lectures,
					description: description,
				});
				console.log(course,"LOG");
				if (course) {
					await course.save();
					res.json(course);
				} else {
					throw new Error("Course not found");
				}
	}
	
});
