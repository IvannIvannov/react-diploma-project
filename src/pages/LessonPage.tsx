import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

interface Lesson {
  _id: string;
  title: string;
  content: string;
}

interface Course {
  _id: string;
  title: string;
  lessons: Lesson[];
}

const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await API.get(`/courses/${courseId}`);
      setCourse(res.data);
    };

    fetchCourse();
  }, [courseId]);

  if (!course) return <p>Loading...</p>;

  const currentIndex = course.lessons.findIndex(
    (lesson) => lesson._id === lessonId,
  );

  const lesson = course.lessons[currentIndex];

  if (!lesson) return <p>Lesson not found</p>;

  const prevLesson = course.lessons[currentIndex - 1];
  const nextLesson = course.lessons[currentIndex + 1];

  return (
    <div style={{ padding: "40px" }}>
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>

      <div style={{ marginTop: "20px" }}>
        {prevLesson && (
          <button
            onClick={() =>
              navigate(`/courses/${courseId}/lessons/${prevLesson._id}`)
            }
          >
            Previous
          </button>
        )}

        {nextLesson && (
          <button
            onClick={() =>
              navigate(`/courses/${courseId}/lessons/${nextLesson._id}`)
            }
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
