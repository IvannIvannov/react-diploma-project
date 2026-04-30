import { useState } from "react";
import { CoursesContext } from "./CoursesContext";
import type { Course } from "./CoursesContext";

export const CoursesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState<Course[]>([
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
  ]);

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
