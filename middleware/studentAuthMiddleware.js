const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { Student } = require("../models/students");
exports.authProtect = asyncHandler(async (req, res, next) => {
	let token;
	if (req.headers.authorization) {
		token = req.headers.authorization;
		// console.log(token,"TOKEN");
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			// console.log(decoded);
			//new concept
			//assigning the value to req.user so that it can be used in protected route
            // -password means exclude password
			req.user = await Student.findById(decoded.id).select("-password");
			// console.log(req.user,"USERR");
			next();
		} catch (err) {
			console.log(err);
			res.status(401);
			throw new Error("Auth failed,token fail");
		}
	} else {
		res.status(401);
		throw new Error("Auth failed,no token");
	}
});
