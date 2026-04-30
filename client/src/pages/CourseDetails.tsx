import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useCourses } from "../context/useCourses";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = useCourses();

  const course = courses.find((c) => c.id === id);

  if (!course) return <h1>Course not found</h1>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <Link to={`/courses/${course.id}/quiz`}>
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default CourseDetails;
