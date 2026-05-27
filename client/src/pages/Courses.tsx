import { Link } from "react-router-dom";
import { useCourses } from "../context/useCourses";
import "./Courses.css";

const Courses = () => {
  const { courses, deleteCourse } = useCourses();

  return (
    <main className="courses-page">
      <section className="courses-layout">
        <aside className="courses-sidebar">
          <p className="courses-label">Course library</p>

          <h1>React learning modules.</h1>

          <p className="courses-description">
            Follow structured courses, complete quizzes and build your React
            knowledge step by step.
          </p>

          <div className="courses-summary">
            <div>
              <strong>{courses.length}</strong>
              <span>Total courses</span>
            </div>

            <div>
              <strong>
                {courses.reduce(
                  (total, course) => total + (course.quizzes?.length || 0),
                  0,
                )}
              </strong>
              <span>Total quizzes</span>
            </div>
          </div>
        </aside>

        <section className="courses-board">
          {courses.length === 0 ? (
            <div className="empty-courses">No courses available yet.</div>
          ) : (
            courses.map((course, index) => (
              <article className="course-module" key={course.id}>
                <div className="course-module-header">
                  <span>Module {String(index + 1).padStart(2, "0")}</span>

                  <span>{course.quizzes?.length || 0} quizzes</span>
                </div>

                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <div className="course-module-footer">
                  <Link to={`/courses/${course.id}`}>View course</Link>

                  <button onClick={() => deleteCourse(course.id)}>
                    Delete
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
      </section>
    </main>
  );
};

export default Courses;
