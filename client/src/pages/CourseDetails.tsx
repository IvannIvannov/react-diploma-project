import { Link, useParams } from "react-router-dom";
import { useCourses } from "../context/useCourses";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = useCourses();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <h1>Курсът не е намерен</h1>;
  }

  return (
    <main className="course-details-page">
      <section className="course-workspace">
        <div className="course-left">
          <p className="course-eyebrow">Учебен модул</p>

          <h1>{course.title}</h1>

          <p className="course-description">{course.description}</p>

          <div className="course-lesson-box">
            <span>Преглед на урока</span>

            <h2>Какво ще научиш в този модул</h2>

            <p>{course.content}</p>
          </div>

          {course.documentationUrl && (
            <a
              className="documentation-card"
              href={course.documentationUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>Официална документация</span>

              <strong>Отвори React документацията →</strong>
            </a>
          )}
        </div>

        <aside className="course-right">
          <div className="video-card">
            {course.videoUrl ? (
              <iframe
                src={course.videoUrl}
                title={course.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-placeholder">Няма налично видео</div>
            )}
          </div>

          <div className="quiz-card">
            <span>Практика</span>

            <h2>Готов/а ли си за теста?</h2>

            <p>
              Прегледай материала и стартирай теста, когато си готов/а да
              провериш знанията си.
            </p>

            <div className="quiz-card-actions">
              <Link to={`/courses/${course.id}/quiz`}>Стартирай тест</Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default CourseDetails;