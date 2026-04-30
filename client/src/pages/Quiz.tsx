import { useParams } from "react-router-dom";
import { useCourses } from "../context/useCourses";
import { useState } from "react";

const Quiz = () => {
  const { id } = useParams();
  const { courses } = useCourses();

  const course = courses.find((c) => c.id === id);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  if (!course || course.quizzes.length === 0) return <h1>No quiz available</h1>;

  const quiz = course.quizzes[current];

  const handleAnswer = (index: number) => {
    if (index === quiz.correctAnswer) {
      setScore(score + 1);
    }

    if (current + 1 < course.quizzes.length) {
      setCurrent(current + 1);
    } else {
      alert(`Your score: ${score + 1}/${course.quizzes.length}`);
    }
  };

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
