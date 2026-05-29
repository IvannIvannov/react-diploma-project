import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useCourses } from "../context/useCourses";

import "./Quiz.css";

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { courses } = useCourses();

  const course = courses.find((c) => c.id === id);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!course) {
    return <h1>Курсът не е намерен</h1>;
  }

  if (course.quizzes.length === 0) {
    return <h1>Няма наличен тест за този курс</h1>;
  }

  const quiz = course.quizzes[current];

  const progress = Math.round(((current + 1) / course.quizzes.length) * 100);

  const handleAnswer = (index: number) => {
    if (index === quiz.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < course.quizzes.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
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
              }}
            >
              Опитай отново
            </button>

            <button
              onClick={() =>
                navigate(`/courses/${course.id}`, {
                  replace: true,
                })
              }
            >
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
