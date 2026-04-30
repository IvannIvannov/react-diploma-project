import { Link } from "react-router-dom";

import { useCourses } from "../context/useCourses";

const Courses = () => {
  const { courses, deleteCourse } = useCourses();

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>

          <Link to={`/courses/${course.id}`}>View Details</Link>

          <button onClick={() => deleteCourse(course.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Courses;
