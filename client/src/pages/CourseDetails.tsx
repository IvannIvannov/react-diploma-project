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
      <section className="course-details-hero">
        <p className="course-details-label">Learning module</p>
        <h1>{course.title}</h1>
        <p>{course.description}</p>

      </section>

      <section className="course-video-section">
        {course.videoUrl ? (
          <iframe
            src={course.videoUrl}
            title={course.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="video-placeholder">
            <h2>No video available</h2>
            <p>This course does not have a video lesson yet.</p>
          </div>
        )}
      </section>

      <section className="course-details-grid">
        <article className="course-learning-card">
          <span>Module overview</span>
          <h2>What you will learn</h2>
          <p>{course.content}</p>
        </article>

        <aside className="course-action-card">
          <span>Resources</span>
          <h2>Continue learning</h2>
          <p>
            Access official React resources and test your knowledge when you are
            ready.
          </p>

          <div className="course-action-buttons">
            {course.documentationUrl && (
              <a
                href={course.documentationUrl}
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
            )}

            <Link to={`/courses/${course.id}/quiz`}>Start Quiz</Link>

            <Link to={`/add-quiz/${course.id}`}>Add Quiz</Link>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default CourseDetails;
