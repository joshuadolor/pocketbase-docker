import React, { createContext, useState, useContext, useEffect } from "react";
import {
    clearAccessToken,
    getAccessToken,
} from "@/infrastructure/utils/token-manager";
import { Spinner } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import userService from "@/application/services/user.service";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const SIGNIN_PATH = "/auth/sign-in";
const DASHBOARD_PATH = "/dashboard/home";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const inAuthPage = () => location.pathname.indexOf("auth") > -1;

    const accessToken = getAccessToken();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(!accessToken);

    const signOutUser = () => {
        setIsLoading(false);
        setUser(null);
        clearAccessToken();
        navigate(SIGNIN_PATH);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setIsLoading(true);
                const userData = await userService.getCurrentUser();
                setUser(userData);
                setIsLoading(false);
                if (inAuthPage()) {
                    navigate(DASHBOARD_PATH);
                }
            } catch (error) {
                signOutUser();
            }
        };

        if (user) {
            setIsLoading(false);
            if (inAuthPage()) {
                navigate(DASHBOARD_PATH);
            }
        } else {
            if (accessToken) {
                fetchUser();
            } else {
                if (!inAuthPage()) {
                    signOutUser();
                } else {
                    setIsLoading(false);
                }
            }
        }
    }, [accessToken, location.pathname]);

    return (
        <AuthContext.Provider value={{ user, setUser, signOutUser, isLoading }}>
            {isLoading ? <Spinner></Spinner> : children}
        </AuthContext.Provider>
    );
};
