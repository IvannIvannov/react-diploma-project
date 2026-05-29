import { Request, Response } from "express";

import QuizResult from "../models/QuizResult";

export const saveQuizResult = async (req: Request, res: Response) => {
  try {
    const { userId, courseId, score, totalQuestions, percentage } = req.body;

    const result = await QuizResult.create({
      userId,
      courseId,
      score,
      totalQuestions,
      percentage,
    });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to save quiz result",
    });
  }
};

export const getUserResults = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const results = await QuizResult.find({
      userId,
    }).sort({
      createdAt: -1,
    });

    res.json(results);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch results",
    });
  }
};
