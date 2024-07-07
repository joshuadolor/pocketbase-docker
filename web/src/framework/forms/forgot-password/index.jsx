import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import formConfig from "./forgot-password.config";

const MESSAGE_TIMEOUT = 5000;

export const ForgotPasswordForm = () => {
    const [formErrors, setFormErrors] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const formik = useFormik(
        formConfig({
            onError: (msg) => {
                setFormErrors(msg);
                setTimeout(() => {
                    setFormErrors("");
                }, MESSAGE_TIMEOUT);
            },
            onSuccess: () => {
                formik.resetForm();
                setSuccessMessage("Request sent. Check your email.");
                setTimeout(() => {
                    setSuccessMessage("");
                }, MESSAGE_TIMEOUT);
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
            </div>

            <Button
                disabled={formik.isSubmitting}
                type="submit"
                className="mt-6"
                fullWidth
            >
                {formik.isSubmitting ? "Signing in..." : "Submit"}
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
            {successMessage && (
                <Typography
                    className="text-center py-2 "
                    color="green"
                    variant="small"
                >
                    {successMessage}
                </Typography>
            )}
        </form>
    );
};

export default ForgotPasswordForm;
