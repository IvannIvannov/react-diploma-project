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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
