import { useParams } from "react-router-dom";
import { useCourses } from "../context/useCourses";
import { useState } from "react";

const Quiz = () => {
  const { id } = useParams();
  const { courses } = useCourses();

  const course = courses.find((c) => c.id === id);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!course || course.quizzes.length === 0) return <h1>No quiz available</h1>;

  const quiz = course.quizzes[current];

  const handleAnswer = (index: number) => {
    if (index === quiz.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < course.quizzes.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const percentage = Math.round((score / course.quizzes.length) * 100);

    return (
      <div>
        <h1>Quiz Finished 🎉</h1>

        <h2>
          Score: {score} / {course.quizzes.length}
        </h2>

        <h3>{percentage}%</h3>

        {percentage >= 70 ? <p>Great job! 👏</p> : <p>Keep learning! 💪</p>}
      </div>
    );
  }

  return (
    <div>
      <h2>{quiz.question}</h2>

      {quiz.options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(i)}>
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
