import { useParams } from "react-router-dom";
import { getCourses } from "../services/courseService";

const CourseDetails = () => {
  const { id } = useParams();

  const courses = getCourses();
  const course = courses.find((c) => c.id === id);

  if (!course) return <h1>Course not found</h1>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;
