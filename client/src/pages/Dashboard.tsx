import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ResultsChart from "../components/ResultsChart";
import { useCourses } from "../context/useCourses";
import { useAuth } from "../hooks/useAuth";
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
      <section className="dashboard-welcome">
        <div>
          <p>Dashboard</p>

          <h1>Здравей, {user?.name}!</h1>

          <span>
            Проследи своя напредък, резултатите от тестовете и завършените React
            модули.
          </span>

          <Link to="/courses">Продължи обучението</Link>
        </div>

        <div className="welcome-visual">
          <strong>{courseProgress}%</strong>
          <span>общ прогрес</span>
        </div>
      </section>

      <section className="dashboard-stats">
        <div className="dashboard-stat-card">
          <span>Завършени тестове</span>
          <strong>{completedTests}</strong>
        </div>

        <div className="dashboard-stat-card">
          <span>Среден резултат</span>
          <strong>{averageScore}%</strong>
        </div>

        <div className="dashboard-stat-card">
          <span>Най-добър резултат</span>
          <strong>{bestScore}%</strong>
        </div>

        <div className="dashboard-stat-card">
          <span>Завършени модули</span>
          <strong>
            {completedCourses.length}/{courses.length}
          </strong>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-chart-box">
          {results.length > 0 ? (
            <ResultsChart results={results} />
          ) : (
            <div className="empty-dashboard-card">
              Все още няма решени тестове.
            </div>
          )}
        </div>

        {latestResult && (
          <div className="latest-result-card">
            <p>Последен тест</p>
            <h2>
              {latestCourse
                ? latestCourse.title
                : `Модул #${latestResult.courseId}`}
            </h2>
            <strong>{latestResult.percentage}%</strong>
          </div>
        )}
      </section>

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
