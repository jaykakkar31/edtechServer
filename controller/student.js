const asyncHandler = require("express-async-handler");
const { Student } = require("../models/students");
var bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

exports.registerStudent = asyncHandler(async (req, res) => {
	const { email, password, name } = req.body;

    

	const userExist = await Student.findOne({ email: email });
	if (userExist) {
		res.status(401);
		throw new Error("Student already exist");
	} else {
		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(password, salt, function (err, hash) {
				// console.log(salt, password);
				if (!err) {
					hashedPassword = hash;
					const newStudent = new Student({
						email: email,
						name: name,
						password: hash,
					});
					newStudent.save(() => {
						console.log("saved");
					});
					if (newStudent) {
						res.status(200).json({
							_id: newStudent._id,
							name: newStudent.name,
							email: newStudent.email,
							isAdmin: newStudent.isAdmin,
							token: generateToken(newStudent._id),
						});
					} else {
						res.status(400);
						throw new Error("Student not found");
					}
				} else {
					res.status(400);
					throw new Error(err);
				}
			});
		});
	}
});


exports.loginStudent = asyncHandler(async (req,res) => {
	const { email, password } = req.body;
	// console.log(req.body, "AUTH");
	const student = await Student.findOne({ email: email });
	if (student && (await bcrypt.compare(password, student.password))) {
		res.json({
			_id: student._id,
			name: student.name,
			email: student.email,
			isAdmin: student.isAdmin,
			token: generateToken(student._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});
