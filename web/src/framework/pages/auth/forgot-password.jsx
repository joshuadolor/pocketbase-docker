import { Typography, Button } from "@material-tailwind/react";
import ForgotPasswordForm from "~/forms/forgot-password";
import { Link } from "react-router-dom";

export function ForgotPassword() {
    return (
        <section className="m-8 flex gap-4 relative">
            <div className="w-full lg:w-3/5 mt-24 lg:px-40">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">
                        Forgot your Password?
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="text-lg font-normal"
                    >
                        Enter your email to reset your password.
                    </Typography>
                </div>
                <ForgotPasswordForm />
                <div className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <Typography
                        variant="paragraph"
                        className="text-center text-blue-gray-500 font-medium mt-4"
                    >
                        Not registered?
                        <Link to="/auth/sign-up" className="text-gray-900 ml-1">
                            Create account
                        </Link>
                    </Typography>
                </div>
            </div>
            <div className="w-2/5 h-full hidden lg:block">
                <img
                    src="/img/pattern.png"
                    className="h-full w-full object-cover rounded-3xl"
                />
            </div>
        </section>
    );
}

export default ForgotPassword;
