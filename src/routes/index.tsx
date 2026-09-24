import { Route, Routes } from "react-router";
import { Landing, Error } from "../pages";
import { Login, Register } from "../pages/form";
import Dashboard from "../pages/dashboad";
import ProtectedRoute from "../ProtectedRoute";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
