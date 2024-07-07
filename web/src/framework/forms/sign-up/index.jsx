import React, { useState } from "react";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import formConfig from "./sign-up.config";

const ERROR_MESSAGE_TIMEOUT = 5000;

export const SignInForm = ({ onLoginSuccess }) => {
    const [formErrors, setFormErrors] = useState("");

    const formik = useFormik(
        formConfig({
            onError: (msg) => {
                setFormErrors(msg);
                setTimeout(() => {
                    setFormErrors("");
                }, ERROR_MESSAGE_TIMEOUT);
            },
            onSuccess: (data) => {
                console.log(data);
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
                        autoComplete="new-password"
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
                <div>
                    <Input
                        type="password"
                        name="confirmPassword"
                        size="lg"
                        label="Confirm Password"
                        autoComplete="new-password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={showError("confirmPassword")}
                        aria-describedby="pwc-desc"
                    />
                    <Typography
                        className="mt-1 min-h-1 text-xs"
                        variant="small"
                        color="red"
                        id="pwc-desc"
                    >
                        {showError("confirmPassword")
                            ? formik.errors.confirmPassword
                            : ""}
                    </Typography>
                </div>
            </div>
            <div className="mt-3">
                <Checkbox
                    checked={formik.values.tandc}
                    onChange={formik.handleChange}
                    name="tandc"
                    label={
                        <div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center justify-start font-medium"
                            >
                                I agree the&nbsp;
                                <a
                                    href="#"
                                    className="font-normal text-black transition-colors hover:text-gray-900 underline"
                                >
                                    Terms and Conditions
                                </a>
                            </Typography>
                            <Typography
                                className="text-xs"
                                variant="small"
                                color="red"
                            >
                                {showError("tandc") ? formik.errors.tandc : ""}
                            </Typography>
                        </div>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
            </div>
            <Button
                disabled={formik.isSubmitting}
                type="submit"
                className="mt-6"
                fullWidth
            >
                {formik.isSubmitting ? "Submitting..." : "Register Now"}
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
