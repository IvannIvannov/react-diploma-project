import express from "express";
import { getQuizByLesson, createQuiz } from "../controllers/quizController";

const router = express.Router();

router.get("/:lessonId", getQuizByLesson);
router.post("/", createQuiz);

export default router;