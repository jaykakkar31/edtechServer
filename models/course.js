const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
	{
		courseName: {
			type: String,
			required: false,
			trim: true,
			unique: true,
		},
		instructorName: {
			type: String,
			required: false,
			trim: true,
		},
		courseImage: {
			type: String,
			required: false,
			trim: true,
		},
		instructorImage: {
			type: String,
			// default: true,
			required: false,
			trim: true,
		},
		price: {
			required: false,
			type: Number,
			trim: true,
		},
		description: {
			type: String,
			required: false,
			trim: true,
		},
		curriculum: {
			type: String,
			required: false,
			trim: true,
		},
		level: {
			type: String,
			required: false,
			trim: true,
		},
		language: {
			type: String,
			required: false,
			trim: true,
		},
		duration: {
			type: String,
			required: false,
			trim: true,
		},
		lectures: {
			type: Number,
			required: false,
			trim: true,
		},
		type: {
			type: String,
			required: false,
			trim: true,
		},
		rating: {
			type: Number,
			required: false,
			trim: true,
		},
	},
	// Mongoose schemas have a timestamps option that tells Mongoose
	//to automatically manage createdAt and updatedAt properties on your documents.
	{ timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

exports.Course = Course;
