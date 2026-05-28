import { Link } from "react-router-dom";
import { useCourses } from "../context/useCourses";
import "./Courses.css";

const Courses = () => {
  const { courses, deleteCourse } = useCourses();

  const totalQuizzes = courses.reduce(
    (total, course) => total + (course.quizzes?.length || 0),
    0,
  );

  return (
    <main className="courses-page">
      <section className="courses-hero">
        <p className="courses-label">Каталог с курсове</p>

        <div className="courses-hero-content">
          <h1>Избери своя React модул.</h1>

          <p>
            Разгледай структурирани уроци, гледай видео материали, използвай
            документация и провери знанията си чрез тестове.
          </p>
        </div>

        <div className="courses-stats">
          <div>
            <strong>{courses.length}</strong>
            <span>курса</span>
          </div>

          <div>
            <strong>{totalQuizzes}</strong>
            <span>теста</span>
          </div>
        </div>
      </section>

      <section className="courses-list">
        {courses.length === 0 ? (
          <div className="empty-courses">Все още няма налични курсове.</div>
        ) : (
          courses.map((course, index) => (
            <article className="course-card" key={course.id}>
              <div className="course-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="course-content">
                <span className="course-type">React модул</span>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>

              <div className="course-info">
                <span>{course.quizzes?.length || 0} теста</span>
                <span>{course.duration}</span>
              </div>

              <div className="course-actions">
                <Link to={`/courses/${course.id}`}>Отвори</Link>

                <button onClick={() => deleteCourse(course.id)}>
                  Изтрий
                </button>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
};

export default Courses;