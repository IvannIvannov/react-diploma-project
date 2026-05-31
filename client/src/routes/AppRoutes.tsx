import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import Layout from "../components/Layout";

import ProtectedRoute from "./ProtectedRoute";
import CreateCourse from "../pages/CreateCourse";
import AdminRoute from "./AdminRoute";
import EditCourse from "../pages/EditCourse";
import Quiz from "../pages/Quiz";
import AddQuiz from "../pages/AddQuiz";
import Certificate from "../pages/Certificate";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create-course"
            element={
              <AdminRoute>
                <CreateCourse />
              </AdminRoute>
            }
          />
          <Route path="/edit-course/:id" element={<EditCourse />} />
          <Route path="/courses/:id/quiz" element={<Quiz />} />
          <Route
            path="/add-quiz/:courseId"
            element={
              <AdminRoute>
                <AddQuiz />
              </AdminRoute>
            }
          />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
