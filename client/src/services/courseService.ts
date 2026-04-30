// eslint-disable-next-line prefer-const
let courses = [
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

export const getCourses = () => courses;

export const addCourse = (course: {
  title: string;
  description: string;
}) => {
  const newCourse = {
    id: Date.now().toString(),
    ...course,
  };

  courses.push(newCourse);
};