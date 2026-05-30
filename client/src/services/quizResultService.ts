const API_URL = "http://localhost:5000/api/quiz-results";

export const saveQuizResult = async (data: {
  userId: string;
  courseId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
}) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getQuizResults = async (userId: string) => {
  const response = await fetch(
    `http://localhost:5000/api/quiz-results/${userId}`,
  );

  return response.json();
};
