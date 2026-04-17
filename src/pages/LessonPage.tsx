import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

interface Lesson {
  _id: string;
  title: string;
  content: string;
}

interface Course {
  _id: string;
  title: string;
  lessons: Lesson[];
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Quiz {
  lessonId: string;
  questions: Question[];
}

const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await API.get(`/courses/${courseId}`);
        setCourse(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (!course) return <p>Loading...</p>;

  const currentIndex = course.lessons.findIndex(
    (lesson) => lesson._id === lessonId,
  );

  const lesson = course.lessons[currentIndex];

  if (!lesson) return <p>Lesson not found</p>;

  const prevLesson = course.lessons[currentIndex - 1];
  const nextLesson = course.lessons[currentIndex + 1];

  const fetchQuiz = async () => {
    try {
      const res = await API.get(`/quizzes/${lessonId}`);
      setQuiz(res.data);
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
      setSelectedAnswer(null);
    } catch (error) {
      console.error(error);
      alert("No quiz found for this lesson");
    }
  };

  const handleAnswer = (selectedIndex: number) => {
    if (!quiz) return;

    setSelectedAnswer(selectedIndex);

    const correct = quiz.questions[currentQuestion].correctAnswer;

    if (selectedIndex === correct) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);

      const next = currentQuestion + 1;

      if (next < quiz.questions.length) {
        setCurrentQuestion(next);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        {prevLesson && (
          <button
            onClick={() =>
              navigate(`/courses/${courseId}/lessons/${prevLesson._id}`)
            }
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Previous
          </button>
        )}

        {nextLesson && (
          <button
            onClick={() =>
              navigate(`/courses/${courseId}/lessons/${nextLesson._id}`)
            }
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Next
          </button>
        )}
      </div>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={fetchQuiz}
          style={{ padding: "10px 16px", cursor: "pointer" }}
        >
          Start Quiz
        </button>
      </div>

      {quiz && !showResult && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          <h3>
            Question {currentQuestion + 1} / {quiz.questions.length}
          </h3>

          <p style={{ fontWeight: "bold" }}>
            {quiz.questions[currentQuestion].question}
          </p>

          {quiz.questions[currentQuestion].options.map((option, index) => {
            let bgColor = "";

            if (selectedAnswer !== null) {
              if (index === quiz.questions[currentQuestion].correctAnswer) {
                bgColor = "lightgreen";
              } else if (index === selectedAnswer) {
                bgColor = "salmon";
              }
            }

            return (
              <div key={index} style={{ marginBottom: "10px" }}>
                <button
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  style={{
                    padding: "10px",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    backgroundColor: bgColor,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  {option}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {showResult && quiz && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
        >
          <h3>
            Your Score: {score} / {quiz.questions.length} (
            {Math.round((score / quiz.questions.length) * 100)}%)
          </h3>

          <button
            onClick={resetQuiz}
            style={{
              padding: "10px 16px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default LessonPage;
