import { useEffect, useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { useCourses } from "../context/useCourses";
import { useAuth } from "../hooks/useAuth";
import { getQuizResults } from "../services/quizResultService";

import "./Certificate.css";

type QuizResult = {
  courseId: string;
  percentage: number;
};

const Certificate = () => {
  const { user } = useAuth();
  const { courses } = useCourses();

  const [results, setResults] = useState<QuizResult[]>([]);

  const today = new Date().toLocaleDateString("bg-BG");

  useEffect(() => {
    const loadResults = async () => {
      if (!user) return;

      const data = await getQuizResults(user.id);
      setResults(data);
    };

    loadResults();
  }, [user]);

  const certificateResults = courses
    .filter((course) => results.some((result) => result.courseId === course.id))
    .map((course) => {
      const courseResults = results.filter(
        (result) => result.courseId === course.id,
      );

      const bestResult = Math.max(
        ...courseResults.map((result) => result.percentage),
      );

      return {
        title: course.title,
        percentage: bestResult,
      };
    });

  const averageScore =
    certificateResults.length > 0
      ? Math.round(
          certificateResults.reduce(
            (sum, result) => sum + result.percentage,
            0,
          ) / certificateResults.length,
        )
      : 0;

  const downloadCertificate = async () => {
    const certificate = document.getElementById("certificate");

    if (!certificate) return;

    const canvas = await html2canvas(certificate, {
      scale: 2,
      useCORS: true,
    });

    const image = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(image, "PNG", 0, 0, pageWidth, pageHeight);

    pdf.save("ReactLearn-Certificate.pdf");
  };

  return (
    <main className="certificate-page">
      <section id="certificate" className="certificate-card">
        <p className="certificate-label">Certificate of Completion</p>

        <h1>React Learning Platform</h1>

        <span>Този сертификат се присъжда на</span>

        <h2>{user?.name}</h2>

        <p className="certificate-text">
          за успешно завършване на всички React модули и тестове в платформата.
        </p>

        <div className="certificate-results">
          {certificateResults.map((result) => (
            <div className="certificate-result-row" key={result.title}>
              <span>{result.title}</span>
              <strong>{result.percentage}%</strong>
            </div>
          ))}
        </div>

        <div className="certificate-average">
          Среден резултат: <strong>{averageScore}%</strong>
        </div>

        <div className="certificate-footer">
          <div>
            <strong>Дата</strong>
            <span>{today}</span>
          </div>

          <div>
            <strong>ReactLearn</strong>
            <span>Learning Platform</span>
          </div>
        </div>
      </section>

      <div className="certificate-actions">
        <button
          className="download-certificate-button"
          onClick={downloadCertificate}
        >
          ⬇ Изтегли сертификата
        </button>
      </div>
    </main>
  );
};

export default Certificate;
