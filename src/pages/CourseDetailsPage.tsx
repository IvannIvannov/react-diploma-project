import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

interface Lesson {
  _id: string;
  title: string;
  content: string;
}

interface Course {
  _id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await API.get(`/courses/${id}`);
      setCourse(res.data);
    };

    fetchCourse();
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <h3>Lessons</h3>

      {course.lessons.map((lesson) => (
        <div key={lesson._id}>
          <h4>{lesson.title}</h4>
          <p>{lesson.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetailsPage;
