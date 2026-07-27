import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminRoute() {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  // User login nahi hai
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  // User logged in hai lekin admin nahi hai
  if (user?.role !== "admin") {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  // User admin hai
  return <Outlet />;
}

export default AdminRoute;