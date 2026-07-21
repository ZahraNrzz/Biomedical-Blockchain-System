import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, adminOnly = false }) {

    const token = localStorage.getItem("token");

    if (!token)

        return <Navigate to="/login" />;

    const user = JSON.parse(

        localStorage.getItem("user")

    );

    if (adminOnly && user.role !== "Admin")

        return <Navigate to="/" />;

    return children;

}

export default ProtectedRoute;