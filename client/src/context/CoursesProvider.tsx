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

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course: { title: string; description: string }) => {
    const newCourse = {
      id: Date.now().toString(),
      ...course,
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

  return (
    <CoursesContext.Provider
      value={{ courses, addCourse, deleteCourse, updateCourse }}
    >
      {children}
    </CoursesContext.Provider>
  );
};
