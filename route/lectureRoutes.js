const express=require("express")
const lectureRouter = express.Router();
const { addLecture } =require( "../controller/lectures");

lectureRouter.post("/add",addLecture)
module.exports=lectureRouter