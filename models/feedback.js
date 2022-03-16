const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			// unique: true,
		},

		userName: {
			type: "String",
			required: true,
            unique:true
		},

		feedback: {
			type: String,
			required: false,
			trim: true,
		},
	},
	// Mongoose schemas have a timestamps option that tells Mongoose
	//to automatically manage createdAt and updatedAt properties on your documents.
	{ timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
exports.Feedback = Feedback;
