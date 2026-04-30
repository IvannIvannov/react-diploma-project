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
        return JSON.parse(stored);
      }

      return [
        {
          id: "1",
          title: "React Basics",
          description: "Learn the fundamentals of React",
          quizzes: [],
        },
        {
          id: "2",
          title: "Advanced React",
          description: "Hooks, Context, Performance",
          quizzes: [],
        },
      ];
    } catch (error) {
      console.error("Error loading courses:", error);
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
                ...course.quizzes,
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
