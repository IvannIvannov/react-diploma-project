import { Request, Response } from "express";
import Result from "../models/Result";

// SAVE RESULT
export const saveResult = async (req: Request, res: Response) => {
  try {
    const { userId, lessonId, score, total } = req.body;

    const result = await Result.create({
      userId,
      lessonId,
      score,
      total,
    });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET USER RESULTS
export const getUserResults = async (req: Request, res: Response) => {
  try {
    const results = await Result.find({ userId: req.params.userId });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
