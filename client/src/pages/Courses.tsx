import { Link } from "react-router-dom";
import { courses } from "../services/courseService";

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id} style={{ marginBottom: "20px" }}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <Link to={`/courses/${course.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
