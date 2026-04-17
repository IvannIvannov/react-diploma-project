import { Request, Response } from "express";
import Quiz from "../models/Quiz";

// GET QUIZ BY LESSON
export const getQuizByLesson = async (req: Request, res: Response) => {
  try {
    const quiz = await Quiz.findOne({ lessonId: req.params.lessonId });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json(quiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE QUIZ
export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { lessonId, questions } = req.body;

    const quiz = await Quiz.create({
      lessonId,
      questions,
    });

    res.status(201).json(quiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
