import { Request, Response } from "express";

import QuizResult from "../models/QuizResult";

// SAVE OR UPDATE RESULT
export const saveResult = async (req: Request, res: Response) => {
  try {
    const { userId, courseId, score, totalQuestions, percentage } = req.body;

    const result = await QuizResult.findOneAndUpdate(
      {
        userId,
        courseId,
      },
      {
        score,
        totalQuestions,
        percentage,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      },
    );

    res.status(200).json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// GET USER RESULTS
export const getUserResults = async (req: Request, res: Response) => {
  try {
    const results = await QuizResult.find({
      userId: req.params.userId,
    }).sort({
      updatedAt: -1,
    });

    res.json(results);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
