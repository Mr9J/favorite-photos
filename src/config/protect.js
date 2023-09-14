import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./firebase";

const ProtectedRoutes = () => {
  return auth?.currentUser ? <Outlet /> : <Navigate to="/signIn" />;
};

export default ProtectedRoutes;
