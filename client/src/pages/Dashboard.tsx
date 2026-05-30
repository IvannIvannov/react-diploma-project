import { useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";
import { useCourses } from "../context/useCourses";

import { getQuizResults } from "../services/quizResultService";

import "./Dashboard.css";

type QuizResult = {
  _id: string;
  courseId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  createdAt: string;
};

const Dashboard = () => {
  const { user } = useAuth();
  const { courses } = useCourses();

  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResults = async () => {
      if (!user) return;

      try {
        const data = await getQuizResults(user.id);
        setResults(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadResults();
  }, [user]);

  if (loading) {
    return <h1>Зареждане...</h1>;
  }

  const completedTests = results.length;

  const completedCourseIds = results.map((result) => result.courseId);

  const uniqueCompletedCourseIds = [...new Set(completedCourseIds)];

  const completedCourses = courses.filter((course) =>
    uniqueCompletedCourseIds.includes(course.id),
  );

  const courseProgress =
    courses.length > 0
      ? Math.round((completedCourses.length / courses.length) * 100)
      : 0;

  const averageScore =
    results.length > 0
      ? Math.round(
          results.reduce((sum, result) => sum + result.percentage, 0) /
            results.length,
        )
      : 0;

  const bestScore =
    results.length > 0 ? Math.max(...results.map((r) => r.percentage)) : 0;

  const latestResult = results[0];

  const latestCourse = courses.find(
    (course) => course.id === latestResult?.courseId,
  );

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <h1>Моят прогрес</h1>

        <p>Следи развитието си и резултатите от всички преминати тестове.</p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <h2>{completedTests}</h2>
          <span>Завършени тестове</span>
        </div>

        <div className="stat-card">
          <h2>{averageScore}%</h2>
          <span>Среден резултат</span>
        </div>

        <div className="stat-card">
          <h2>{bestScore}%</h2>
          <span>Най-добър резултат</span>
        </div>
      </section>

      {latestResult && (
        <section className="latest-result-card">
          <div>
            <h2>Последен тест</h2>

            <p>
              {latestCourse
                ? latestCourse.title
                : `Модул #${latestResult.courseId}`}
            </p>
          </div>

          <strong>{latestResult.percentage}%</strong>
        </section>
      )}

      <section className="course-progress-section">
        <div className="course-progress-header">
          <div>
            <p>Учебен прогрес</p>
            <h2>Прогрес по модули</h2>
          </div>

          <strong>{courseProgress}%</strong>
        </div>

        <div className="dashboard-progress-bar">
          <div style={{ width: `${courseProgress}%` }} />
        </div>

        <div className="course-progress-list">
          {courses.map((course) => {
            const isCompleted = uniqueCompletedCourseIds.includes(course.id);

            return (
              <div
                className={`course-progress-item ${
                  isCompleted ? "completed" : ""
                }`}
                key={course.id}
              >
                <span>{isCompleted ? "✓" : "→"}</span>

                <div>
                  <strong>{course.title}</strong>
                  <p>{isCompleted ? "Завършен модул" : "Не е започнат"}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
