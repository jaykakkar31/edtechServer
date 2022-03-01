const mongoose = require("mongoose");
const lectureSchema = new mongoose.Schema(
	{
		subjectName: {
			type: String,
			required: true,
		},
		instructorName: {
			type: String,
			required: true,
			trim: true,
		},

		description: {
			type: String,
			required: true,
			trim: true,
		},

		language: {
			type: String,
			required: false,
			trim: true,
		},
		duration: {
			type: Number,
			required: false,
			trim: true,
		},
		meetingId: {
			type: String,
			unique: true,
			trim: true,
			required: true,
		},
	},
	// Mongoose schemas have a timestamps option that tells Mongoose
	//to automatically manage createdAt and updatedAt properties on your documents.
	{ timestamps: true }
);

const Lectures=mongoose.model("Lecture",lectureSchema)
exports.Lectures=Lectures