import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../src/contexts/AuthContext";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
