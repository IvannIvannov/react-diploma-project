import { useEffect, useState } from "react";

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
          <h2>Последен тест</h2>

          <p>Модул #{latestResult.courseId}</p>

          <strong>{latestResult.percentage}%</strong>
        </section>
      )}
    </main>
  );
};

export default Dashboard;
