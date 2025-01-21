/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children, urlPath }) {
  return user ? <Navigate to={urlPath} /> : children;
}

export default ProtectedRoute;
