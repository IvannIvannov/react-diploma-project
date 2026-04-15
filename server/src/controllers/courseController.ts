import { Request, Response } from "express";
import Course from "../models/Course";

// GET ALL COURSES
export const getCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE COURSE
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, lessons } = req.body;

    const course = await Course.create({
      title,
      description,
      lessons,
    });

    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};