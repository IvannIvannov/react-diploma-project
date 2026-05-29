import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useCourses } from "../context/useCourses";
import { useAuth } from "../hooks/useAuth";

import { saveQuizResult } from "../services/quizResultService";

import "./Quiz.css";

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
      await saveQuizResult({
        userId: user.id,
        courseId: course.id,
        score: updatedScore,
        totalQuestions: course.quizzes.length,
        percentage,
      });

      setIsSaved(true);
    }
  };

  if (finished) {
    const percentage = Math.round((score / course.quizzes.length) * 100);

    return (
      <main className="quiz-page">
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
