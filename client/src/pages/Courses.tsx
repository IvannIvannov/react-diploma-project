import { Link } from "react-router-dom";
import { useCourses } from "../context/useCourses";
import "./Courses.css";

const Courses = () => {
  const { courses, deleteCourse } = useCourses();

  return (
    <main className="courses-page">
      <section className="courses-layout">
        <aside className="courses-sidebar">
          <p className="courses-label">Библиотека с курсове</p>

          <h1>Модули за обучение по React.</h1>

          <p className="courses-description">
            Следвай структурирани курсове, решавай тестове и развивай знанията
            си по React стъпка по стъпка.
          </p>

          <div className="courses-summary">
            <div>
              <strong>{courses.length}</strong>
              <span>Общо курсове</span>
            </div>

            <div>
              <strong>
                {courses.reduce(
                  (total, course) => total + (course.quizzes?.length || 0),
                  0,
                )}
              </strong>

              <span>Общо тестове</span>
            </div>
          </div>
        </aside>

        <section className="courses-board">
          {courses.length === 0 ? (
            <div className="empty-courses">Все още няма налични курсове.</div>
          ) : (
            courses.map((course, index) => (
              <article className="course-module" key={course.id}>
                <div className="course-module-header">
                  <span>Модул {String(index + 1).padStart(2, "0")}</span>

                  <span>{course.quizzes?.length || 0} теста</span>
                </div>

                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <div className="course-module-footer">
                  <Link to={`/courses/${course.id}`}>Отвори курса</Link>

                  <button onClick={() => deleteCourse(course.id)}>
                    Изтрий
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
