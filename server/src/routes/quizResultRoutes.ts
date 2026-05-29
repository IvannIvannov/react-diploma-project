import express from "express";

import {
  saveQuizResult,
  getUserResults,
} from "../controllers/quizResultController";

const router = express.Router();

router.post("/", saveQuizResult);

router.get("/:userId", getUserResults);

export default router;
