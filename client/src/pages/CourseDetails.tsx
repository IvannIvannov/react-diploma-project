import { Link, useParams } from "react-router-dom";
import { useCourses } from "../context/useCourses";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = useCourses();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <main className="course-details-page">
      <section className="course-workspace">
        <div className="course-left">
          <p className="course-eyebrow">Learning module</p>
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>

          <div className="course-lesson-box">
            <span>Lesson overview</span>
            <h2>What this module covers</h2>
            <p>{course.content}</p>
          </div>

          {course.documentationUrl && (
            <a
              className="documentation-card"
              href={course.documentationUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>Official docs</span>
              <strong>Open React documentation →</strong>
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
              <div className="video-placeholder">No video available</div>
            )}
          </div>

          <div className="quiz-card">
            <span>Practice</span>
            <h2>Ready for the quiz?</h2>
            <p>
              Complete the module and test your understanding with interactive
              questions.
            </p>

            <div className="quiz-card-actions">
              <Link to={`/courses/${course.id}/quiz`}>Start Quiz</Link>

              <Link to={`/add-quiz/${course.id}`}>Add Quiz</Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default CourseDetails;
