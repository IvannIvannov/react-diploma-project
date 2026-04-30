import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCourses } from "../context/useCourses";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { courses, updateCourse } = useCourses();

  const course = courses.find((c) => c.id === id);

  const [title, setTitle] = useState(course?.title || "");
  const [description, setDescription] = useState(course?.description || "");

  if (!course) return <h1>Course not found</h1>;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    updateCourse(id!, { title, description });

    navigate("/courses");
  };

  return (
    <div>
      <h1>Edit Course</h1>

      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <br />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditCourse;
