import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: Number,
});

const quizSchema = new mongoose.Schema({
  lessonId: { type: String, required: true },
  questions: [questionSchema],
});

export default mongoose.model("Quiz", quizSchema);
