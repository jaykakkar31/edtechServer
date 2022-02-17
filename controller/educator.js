const asyncHandler = require("express-async-handler");
var bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");
const { Educator } = require("../models/educator");

exports.registerEducator = asyncHandler(async (req, res) => {
	const { email, password, name } = req.body;

	console.log(req.body, "USER");

	const userExist = await Educator.findOne({ email: email });
	if (userExist) {
		res.status(401);
		throw new Error("Educator already exist");
	} else {
		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(password, salt, function (err, hash) {
				// console.log(salt, password);
				if (!err) {
					hashedPassword = hash;
					const newEducator = new Educator({
						email: email,
						name: name,
						password: hash,
					});
					newEducator.save(() => {
						console.log("saved");
					});
					if (newEducator) {
						res.status(200).json({
							_id: newEducator._id,
							name: newEducator.name,
							email: newEducator.email,
							isAdmin: newEducator.isAdmin,
							token: generateToken(newEducator._id),
						});
					} else {
						res.status(400);
						throw new Error("User not found");
					}
				} else {
					res.status(400);
					throw new Error(err);
				}
			});
		});
	}
});
