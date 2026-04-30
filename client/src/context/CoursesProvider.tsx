import { useState, useEffect } from "react";
import { CoursesContext } from "./CoursesContext";
import type { Course } from "./CoursesContext";

export const CoursesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 👉 Зареждане от localStorage (само веднъж)
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
        },
        {
          id: "2",
          title: "Advanced React",
          description: "Hooks, Context, Performance",
        },
      ];
    } catch (error) {
      console.error("Error loading courses:", error);
      return [];
    }
  });

  // 👉 Запис в localStorage при всяка промяна
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  // 👉 Добавяне на курс
  const addCourse = (course: { title: string; description: string }) => {
    const newCourse = {
      id: Date.now().toString(),
      ...course,
    };

    setCourses((prev) => [...prev, newCourse]);
  };

  return (
    <CoursesContext.Provider value={{ courses, addCourse }}>
      {children}
    </CoursesContext.Provider>
  );
};
