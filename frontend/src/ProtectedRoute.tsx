import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait until authentication status is checked
  if (loading) {
    return <div>Loading...</div>;
  }

  // Not logged in? Redirect to login
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // Authenticated? Render requested page
  return <Outlet />;
}
