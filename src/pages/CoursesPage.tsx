import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

interface Course {
  _id: string;
  title: string;
  description: string;
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await API.get("/courses");
        setCourses(res.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Courses</h2>

      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        courses.map((course) => (
          <div key={course._id} style={{ marginBottom: "20px" }}>
            <Link to={`/courses/${course._id}`}>
              <h3>{course.title}</h3>
            </Link>
            <p>{course.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CoursesPage;
