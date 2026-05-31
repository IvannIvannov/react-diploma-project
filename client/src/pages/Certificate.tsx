import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { useAuth } from "../hooks/useAuth";

import "./Certificate.css";

const Certificate = () => {
  const { user } = useAuth();

  const today = new Date().toLocaleDateString("bg-BG");

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
