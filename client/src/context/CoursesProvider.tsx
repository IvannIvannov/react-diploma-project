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
            "Learn the core concepts of React, including components, JSX, props and state.",
          quizzes: [],
        },
        {
          id: "2",
          title: "React Hooks",
          description:
            "Understand useState, useEffect and how hooks simplify React logic.",
          quizzes: [],
        },
        {
          id: "3",
          title: "React Router",
          description:
            "Create multi-page React applications with dynamic and protected routes.",
          quizzes: [],
        },
        {
          id: "4",
          title: "Authentication in React",
          description:
            "Build login and register systems using authentication and protected routes.",
          quizzes: [],
        },
        {
          id: "5",
          title: "State Management",
          description:
            "Learn Context API, reusable hooks and managing global application state.",
          quizzes: [],
        },
        {
          id: "6",
          title: "React Project Practice",
          description:
            "Practice building real React applications with quizzes, dashboards and routing.",
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
                ...(course.quizzes || []), // 👉 FIX
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
