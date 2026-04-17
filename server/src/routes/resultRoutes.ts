import express from "express";
import { saveResult, getUserResults } from "../controllers/resultController";

const router = express.Router();

router.post("/", saveResult);
router.get("/:userId", getUserResults);

export default router;
