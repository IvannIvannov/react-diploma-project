import { useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../services/courseService";

const Courses = () => {
  const [courses] = useState(getCourses());

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <Link to={`/courses/${course.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;