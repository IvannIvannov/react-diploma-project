import express from "express";
import {
  getCourses,
  createCourse,
  getCourseById,
} from "../controllers/courseController";

const router = express.Router();

router.get("/", getCourses);
router.post("/", createCourse);
router.get("/:id", getCourseById);

export default router;
