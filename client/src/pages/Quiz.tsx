import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useCourses } from "../context/useCourses";
import { useAuth } from "../hooks/useAuth";

import { getQuizResults, saveQuizResult } from "../services/quizResultService";

import "./Quiz.css";

type Achievement = {
  icon: string;
  title: string;
};

type QuizResult = {
  courseId: string;
  percentage: number;
};

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { courses } = useCourses();
  const { user } = useAuth();

  const course = courses.find((c) => c.id === id);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [activeAchievement, setActiveAchievement] = useState(0);

  useEffect(() => {
    if (achievements.length === 0) return;

    const rotateTimer = setInterval(() => {
      setActiveAchievement((prev) => {
        if (prev + 1 >= achievements.length) {
          clearInterval(rotateTimer);
          return prev;
        }

        return prev + 1;
      });
    }, 2200);

    const hideTimer = setTimeout(
      () => {
        setAchievements([]);
        setActiveAchievement(0);
      },
      achievements.length * 2200 + 1200,
    );

    return () => {
      clearInterval(rotateTimer);
      clearTimeout(hideTimer);
    };
  }, [achievements]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!course) {
    return <h1>Курсът не е намерен</h1>;
  }

  if (course.quizzes.length === 0) {
    return <h1>Няма наличен тест за този курс</h1>;
  }

  const quiz = course.quizzes[current];

  const progress = Math.round(((current + 1) / course.quizzes.length) * 100);

  const handleAnswer = async (index: number) => {
    const isCorrect = index === quiz.correctAnswer;
    const updatedScore = isCorrect ? score + 1 : score;

    if (current + 1 < course.quizzes.length) {
      setScore(updatedScore);
      setCurrent((prev) => prev + 1);
      return;
    }

    const percentage = Math.round((updatedScore / course.quizzes.length) * 100);

    setScore(updatedScore);
    setFinished(true);

    if (user && !isSaved) {
      const previousResults: QuizResult[] = await getQuizResults(user.id);

      await saveQuizResult({
        userId: user.id,
        courseId: course.id,
        score: updatedScore,
        totalQuestions: course.quizzes.length,
        percentage,
      });

      setIsSaved(true);

      const previousCompletedIds = [
        ...new Set(previousResults.map((result) => result.courseId)),
      ];

      const newCompletedIds = [
        ...new Set([...previousCompletedIds, course.id]),
      ];

      const previousProgress =
        courses.length > 0
          ? Math.round((previousCompletedIds.length / courses.length) * 100)
          : 0;

      const newProgress =
        courses.length > 0
          ? Math.round((newCompletedIds.length / courses.length) * 100)
          : 0;

      const unlockedAchievements: Achievement[] = [];

      if (previousResults.length === 0) {
        unlockedAchievements.push({
          icon: "🏁",
          title: "Отключи постижение: Първи тест",
        });
      }

      const hadPerfectScore = previousResults.some(
        (result) => result.percentage === 100,
      );

      if (!hadPerfectScore && percentage === 100) {
        unlockedAchievements.push({
          icon: "💯",
          title: "Отключи постижение: Отличен резултат",
        });
      }

      if (previousResults.length < 5 && previousResults.length + 1 >= 5) {
        unlockedAchievements.push({
          icon: "📚",
          title: "Отключи постижение: Активен обучаем",
        });
      }

      if (previousProgress < 50 && newProgress >= 50) {
        unlockedAchievements.push({
          icon: "🚀",
          title: "Отключи постижение: Напреднал",
        });
      }

      if (previousProgress < 100 && newProgress === 100) {
        unlockedAchievements.push({
          icon: "🎓",
          title: "Отключи постижение: React Master",
        });
      }

      setActiveAchievement(0);
      setAchievements(unlockedAchievements);
    }
  };

  if (finished) {
    const percentage = Math.round((score / course.quizzes.length) * 100);

    const currentAchievement = achievements[activeAchievement];

    return (
      <main className="quiz-page">
        {currentAchievement && (
          <div className="achievement-toast" key={currentAchievement.title}>
            <span>{currentAchievement.icon}</span>

            <div>
              <strong>Ново постижение!</strong>
              <p>{currentAchievement.title}</p>
            </div>
          </div>
        )}

        <section className="quiz-result-card">
          <p className="quiz-label">Тестът е завършен</p>

          <h1>
            {percentage >= 70 ? "Страхотна работа!" : "Продължавай да учиш!"}
          </h1>

          <div className="quiz-score">
            <strong>
              {score} / {course.quizzes.length}
            </strong>

            <span>{percentage}%</span>
          </div>

          <p className="quiz-result-message">
            {percentage >= 70
              ? "Успешно премина теста и показа добро разбиране на материала."
              : "Прегледай отново урока и опитай теста повторно."}
          </p>

          <div className="quiz-result-actions">
            <button
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setFinished(false);
                setIsSaved(false);
                setAchievements([]);
                setActiveAchievement(0);
              }}
            >
              Опитай отново
            </button>

            <button onClick={() => navigate(`/courses/${course.id}`)}>
              Обратно към курса
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="quiz-page">
      <section className="quiz-card">
        <div className="quiz-top">
          <p className="quiz-label">{course.title}</p>

          <span>
            Въпрос {current + 1} от {course.quizzes.length}
          </span>
        </div>

        <div className="quiz-progress">
          <div style={{ width: `${progress}%` }} />
        </div>

        <h1>{quiz.question}</h1>

        <div className="quiz-options">
          {quiz.options.map((option, index) => (
            <button key={option} onClick={() => handleAnswer(index)}>
              {option}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Quiz;
