const express=require("express")
const lectureRouter = express.Router();
const { addLecture ,getAllLectures, deleteLectureByMeetingId} =require( "../controller/lectures");
const { authProtect } = require("../middleware/educatorAuthMiddleware");

lectureRouter.post("/add", authProtect, addLecture);
lectureRouter.get("/get", getAllLectures);
lectureRouter.delete("/deletelecture/:id",deleteLectureByMeetingId)

module.exports=lectureRouter