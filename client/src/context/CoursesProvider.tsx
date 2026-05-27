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
          title: "Основи на React",
          description:
            "Научи основните концепции на React, включително JSX, компоненти, props и state.",
          level: "Начинаещ",
          duration: "45 мин",
          videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
          documentationUrl: "https://react.dev/learn",
          topics: ["JSX", "Компоненти", "Props", "State"],
          content:
            "Този модул представя основите на React. Ще научиш как са структурирани React приложенията, как работят компонентите и как се предават данни чрез props и state.",
          quizzes: [],
        },
        {
          id: "2",
          title: "React Hooks",
          description:
            "Разбери как работят useState, useEffect и как hooks улесняват логиката в React приложенията.",
          level: "Средно ниво",
          duration: "50 мин",
          videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
          documentationUrl: "https://react.dev/reference/react",
          topics: ["useState", "useEffect", "Custom Hooks"],
          content:
            "Този модул обяснява как hooks позволяват на функционалните компоненти да управляват state, side effects и преизползваема логика.",
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
      level: "Начинаещ",
      duration: "30 мин",
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

export default CoursesProvider;