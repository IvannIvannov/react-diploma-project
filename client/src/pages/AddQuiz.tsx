import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCourses } from "../context/useCourses";

const AddQuiz = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { addQuiz } = useCourses();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const handleOptionChange = (value: string, index: number) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    addQuiz(courseId!, {
      question,
      options,
      correctAnswer,
    });

    navigate(`/courses/${courseId}`);
  };

  return (
    <div>
      <h1>Add Quiz</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <br />

        {options.map((opt, i) => (
          <div key={i}>
            <input
              placeholder={`Option ${i + 1}`}
              value={opt}
              onChange={(e) => handleOptionChange(e.target.value, i)}
            />
            <input
              type="radio"
              name="correct"
              checked={correctAnswer === i}
              onChange={() => setCorrectAnswer(i)}
            />
          </div>
        ))}

        <button type="submit">Add Quiz</button>
      </form>
    </div>
  );
};

export default AddQuiz;
