const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		userImage: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
		contact: {
			type: Number,
			required: true,
		},
		dob: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		isStudent: {
			type: Boolean,
			default: true,
			required: true,
		},
	},
	// Mongoose schemas have a timestamps option that tells Mongoose
	//to automatically manage createdAt and updatedAt properties on your documents.
	{ timestamps: true }
);

const Student = mongoose.model("Students", studentsSchema);

exports.Student = Student;
