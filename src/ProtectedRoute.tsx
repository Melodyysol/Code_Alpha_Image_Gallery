import type { ReactNode } from "react";
import { UseAuth } from "./custom-hooks";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = UseAuth();

  if (loading)
    return (
      <div className="loading loading-infinity loading-xl loading-spinner"></div>
    );

  if (!user) return <Navigate to="/login" />;
  return children;
}
