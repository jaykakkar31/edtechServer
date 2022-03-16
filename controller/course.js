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
		const data = [
			{
				courseImage: "assets/images/courses/courses-01.jpg",
				instructorImage: "assets/images/author/author-02.jpg",
				instructName: "Jason Williams",
				type: "Science",
				courseName: "Data Science and Machine Learning with Python -Hands On!",
				duration: " 08 hr 15 mins",
				lectures: "29",
				price: 385.0,
				rating: 4.9,
			},
			{
				courseImage: "assets/images/courses/courses-02.jpg",
				instructorImage: "assets/images/author/author-01.jpg",
				instructName: "Pamela Foster",
				type: "Science",
				courseName: "Create Amazing Color Schemes for Your UX Design Projects",
				duration: " 08 hr 15 mins",
				lectures: "29",
				price: 420.0,
				rating: 4.9,
			},
			{
				courseImage: "assets/images/courses/courses-03.jpg",
				instructorImage: "assets/images/author/author-03.jpg",
				instructName: "Rose Simmons",
				type: "Science",
				courseName:
					"Culture & Leadership: Strategies for a Successful Business",
				duration: " 08 hr 15 mins",
				lectures: "29",
				price: 295.0,
				rating: 4.9,
			},
			{
				courseImage: "assets/images/courses/courses-04.jpg",
				instructorImage: "assets/images/author/author-04.jpg",
				instructName: "Angelia Williams",
				type: "Finance",
				courseName:
					"Finance Series: Learn to Budget and Calculate your Net Worth.",
				duration: " 08 hr 15 mins",
				lectures: "29",
				price: 295.0,
				rating: 4.9,
			},
			{
				courseImage: "assets/images/courses/courses-05.jpg",
				instructorImage: "assets/images/author/author-02.jpg",
				instructName: "Jason Williams",
				type: "Marketing",
				courseName:
					"Build Brand Into Marketing: Tackling the New Marketing Landscape",
				duration: " 08 hr 15 mins",
				lectures: "29",
				price: 136.0,
				rating: 4.9,
			},
			{
				courseImage: "assets/images/courses/courses-06.jpg",
				instructorImage: "assets/images/author/author-01.jpg",
				instructName: "Pamela Foster",
				type: "Design",
				courseName:
					"Graphic Design: Illustrating Badges and Icons with Geometric Shapes",
				duration: " 08 hr 15 mins",
				lectures: "29",
				price: 237.0,
				rating: 4.9,
			},
		];
		console.log(req.body);
//ADDING DATA
		// const sampleProducts = data.map((d) => {
		// 	return { ...d };
		// });
		// await Course.insertMany(sampleProducts);
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
		console.log(course, "LOG");
		if (course) {
			await course.save();
			res.json(course);
		} else {
			throw new Error("Course not found");
		}
		res.json("done");
	}
});

exports.getAllCourses = asyncHandler(async (req, res) => {
	try {
		const coursesList = await Course.find({});
		res.json(coursesList);
	} catch (e) {
		throw new Error(e.message);
	}
});