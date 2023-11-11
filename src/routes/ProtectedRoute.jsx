import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { token, role } = useContext(AuthContext);

  const isAllowed = allowedRoles.includes(role);

  const accessableRoute =
    token && isAllowed ? children : <Navigate to="/login" replace={true} />;

  return accessableRoute;
}
