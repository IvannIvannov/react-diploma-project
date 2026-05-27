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
      <div className="course-details-container">
        <section className="course-details-header">
          <p className="course-details-label">Learning module</p>

          <h1>{course.title}</h1>

          <p>{course.description}</p>

          <div className="course-meta-row">
            <span>{course.level}</span>
            <span>{course.duration}</span>
            <span>{course.quizzes.length} quiz questions</span>
          </div>
        </section>

        <section className="course-content-grid">
          <article className="course-video-card">
            {course.videoUrl ? (
              <iframe
                src={course.videoUrl}
                title={course.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="course-video-content">
                <h2>No video available</h2>
                <p>This course does not have a video lesson yet.</p>
              </div>
            )}

            <div className="course-video-content">
              <h2>About this module</h2>
              <p>{course.content}</p>
            </div>
          </article>

          <aside className="course-side-column">
            <div className="course-info-card">
              <h2>Learning resources</h2>

              <p> Explore additional learning materials and official React documentation.</p>

              {course.documentationUrl && (
                <a
                  className="documentation-link"
                  href={course.documentationUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open documentation →
                </a>
              )}
            </div>

            <div className="course-quiz-card">
              <h2>Quiz</h2>

              <p>Test your knowledge after completing the lesson.</p>

              <div className="quiz-actions">
                <Link to={`/courses/${course.id}/quiz`} className="quiz-button">
                  Start Quiz
                </Link>

                <Link to={`/add-quiz/${course.id}`} className="add-quiz-button">
                  Add Quiz
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default CourseDetails;
