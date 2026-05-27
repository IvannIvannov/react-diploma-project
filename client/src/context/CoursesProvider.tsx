import { useState, useEffect } from "react";
import { CoursesContext } from "./CoursesContext";
import type { Course } from "./CoursesContext";

export const CoursesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const stored = localStorage.getItem("courses");

      if (stored) {
        const parsed: Course[] = JSON.parse(stored);

        return parsed.map((course) => ({
          ...course,
          quizzes: course.quizzes || [],
        }));
      }

      return [
        {
          id: "1",
          title: "React Fundamentals",
          description:
            "Learn the core concepts of React, including JSX, components, props and state.",
          level: "Beginner",
          duration: "45 min",
          videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
          documentationUrl: "https://react.dev/learn",
          topics: ["JSX", "Components", "Props", "State"],
          content:
            "This module introduces the foundation of React. You will learn how React applications are structured, how components work and how data is passed through props and state.",
          quizzes: [],
        },
        {
          id: "2",
          title: "React Hooks",
          description:
            "Understand useState, useEffect and how hooks help manage logic in React applications.",
          level: "Intermediate",
          duration: "50 min",
          videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
          documentationUrl: "https://react.dev/reference/react",
          topics: ["useState", "useEffect", "Custom Hooks"],
          content:
            "This module explains how hooks allow functional components to manage state, side effects and reusable logic.",
          quizzes: [],
        },
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course: { title: string; description: string }) => {
    const newCourse = {
      id: Date.now().toString(),
      ...course,
      level: "Beginner",
      duration: "30 min",
      videoUrl: "",
      documentationUrl: "",
      topics: [],
      content: "",
      quizzes: [],
    };

    setCourses((prev) => [...prev, newCourse]);
  };

  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const updateCourse = (
    id: string,
    updatedData: { title: string; description: string },
  ) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, ...updatedData } : course,
      ),
    );
  };

  const addQuiz = (
    courseId: string,
    quiz: {
      question: string;
      options: string[];
      correctAnswer: number;
    },
  ) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === courseId
          ? {
              ...course,
              quizzes: [
                ...(course.quizzes || []), 
                {
                  id: Date.now().toString(),
                  ...quiz,
                },
              ],
            }
          : course,
      ),
    );
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        addCourse,
        deleteCourse,
        updateCourse,
        addQuiz,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};
