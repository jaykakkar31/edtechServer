require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");
const cors = require("cors");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const { RtcTokenBuilder, RtcRole } = require("agora-access-token");
const middleware=require("./middleware/agoraMiddleware")
const educatorRouter = require("./route/educatorRoutes");
const studentRouter = require("./route/studentsRoutes");
const path = require("path");

const mongodb = process.env.MONGO_URI;
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
// app.get("/api/agora-call/token", middleware, (req, res) => {
// 	// res.header("Access-Control-Allow-Origin", "*");
// 	const channel = req.query.channel;
// 	if (!channel) {
// 		return res.status(500).json({ error: "channel name missing" });
// 	}
// 	let uid = 123456;
// 	let role = RtcRole.PUBLISHER;
// 	let expireTime = 36000;
// 	const currentTime = Math.floor(Date.now() / 1000);
// 	const privilegeExpireTime = currentTime + expireTime;
// 	const token = RtcTokenBuilder.buildTokenWithUid(
// 		"c43ebeb74b734075ac5680368cc49c4c",
// 		"6676f052ec63445cb82167ce42442a3d",
// 		channel,
// 		uid,
// 		role,
// 		privilegeExpireTime
// 	);
//     console.log(token);
// 	 res.json({ token: token });
// });


app.get("/", (req, res) => {
	res.send("Api is running");
});

app.use(errorHandler);
app.use(notFound);
app.listen(port, () => {
	console.log(`Server listens at http://localhost:${port}`);
});
