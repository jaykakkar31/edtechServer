require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");
const cors = require("cors");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const educatorRouter = require("./route/educatorRoutes");
const studentRouter = require("./route/studentsRoutes");
const feedbackRouter=require("./route/feedbackRoutes")
const path = require("path");
const couseRouter=require("./route/courseRoutes")
const mongodb = process.env.MONGO_URI;
const lectureRouter=require("./route/lectureRoutes")

app.use(
	cors({
		origin: "*",
	})
);
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

mongoose
	.connect(mongodb, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Mongodb is conneccted");
	})
	.catch((e) => {
		console.log("Mogodb not connected");
	});
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

// app.post("/api/student/register",(req,res)=>{
//     console.log(req.body);
//     res.json("reached")
// })

app.use("/api/student", studentRouter);
app.use("/api/educator", educatorRouter);
app.use("/api/courses", couseRouter)
app.use("/api/lectures", lectureRouter)
app.use("/api/feedback", feedbackRouter)

app.get("/", (req, res) => {
	res.send("Api is running");
});

// app.use(errorHandler);
// app.use(notFound);
app.listen(port, () => {
	console.log(`Server listens at http://localhost:${port}`);
});
