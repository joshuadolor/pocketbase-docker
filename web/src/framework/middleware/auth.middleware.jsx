import { Spinner } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "~/context/auth.context";

const AuthMiddleware = (WrappedComponent) => {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    if (isLoading) {
        return <Spinner>Loading...</Spinner>;
    }

    if (!user) {
        navigate("/auth/sign-in");
        return null; // or a loading spinner
    }

    return (props) => {
        return <WrappedComponent {...props} />;
    };
};

export default AuthMiddleware;
