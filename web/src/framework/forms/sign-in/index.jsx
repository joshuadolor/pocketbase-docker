import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import formConfig from "./sign-in.config";
import { useAuth } from "@/framework/context/auth.context";

const ERROR_MESSAGE_TIMEOUT = 5000;

export const SignInForm = ({ onLoginSuccess }) => {
    const [formErrors, setFormErrors] = useState("");
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const formik = useFormik(
        formConfig({
            onError: (msg) => {
                setFormErrors(msg);
                setTimeout(() => {
                    setFormErrors("");
                }, ERROR_MESSAGE_TIMEOUT);
            },
            onSuccess: (data) => {
                const { record } = data;
                setUser(record);
                navigate("/dashboard/home");
            },
        })
    );

    const showError = (field) => {
        return !!(formik.touched[field] && formik.errors[field]);
    };

    return (
        <form
            className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
            onSubmit={formik.handleSubmit}
        >
            <div className="mb-1 flex flex-col gap-4">
                <div>
                    <Input
                        size="lg"
                        label="Email"
                        name="email"
                        value={formik.values.email}
                        autoComplete="email"
                        onChange={formik.handleChange}
                        error={showError("email")}
                        aria-describedby="email-desc"
                        variant="outlined"
                    />
                    <Typography
                        variant="small"
                        color="red"
                        className="mt-1 min-h-1 text-xs"
                        id="email-desc"
                    >
                        {showError("email") ? formik.errors.email : ""}
                    </Typography>
                </div>
                <div>
                    <Input
                        type="password"
                        name="password"
                        size="lg"
                        label="Password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={showError("password")}
                        aria-describedby="pw-desc"
                    />
                    <Typography
                        className="mt-1 min-h-1 text-xs"
                        variant="small"
                        color="red"
                        id="pw-desc"
                    >
                        {showError("password") ? formik.errors.password : ""}
                    </Typography>
                </div>
            </div>

            <Button
                disabled={formik.isSubmitting}
                type="submit"
                className="mt-6"
                fullWidth
            >
                {formik.isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
            {formErrors && (
                <Typography
                    className="text-center py-2 "
                    color="red"
                    variant="small"
                >
                    {formErrors}
                </Typography>
            )}
        </form>
    );
};

export default SignInForm;
