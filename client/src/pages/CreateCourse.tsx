import { useState } from "react";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      title,
      description,
    });
  };

  return (
    <div>
      <h1>Create Course</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <textarea
          placeholder="Course description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCourse;
