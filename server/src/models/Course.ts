import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  lessons: [lessonSchema],
});

export default mongoose.model("Course", courseSchema);
