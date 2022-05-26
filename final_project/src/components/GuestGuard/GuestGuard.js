import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../config/routes";
import { AuthContext } from "../../context/AuthContext";

function GuestGuard({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to={ROUTES.MAIN} />;
  }

  return <>{children}</>;
}

export default GuestGuard;
