import { Spinner } from "@material-tailwind/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "~/context/auth.context";

const ProtectedRoute = ({ children }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <Spinner></Spinner>;
    }

    if (!user) {
        return <Navigate to="/auth/sign-in" />;
    }

    return children;
};

export default ProtectedRoute;
