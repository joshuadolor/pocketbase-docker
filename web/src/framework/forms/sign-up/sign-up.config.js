import userService from "@/application/services/user.service";
import SignUpRequest from "@/application/requests/signup.request";
import validationSchema from "./sign-up.validationSchema";

export default function ({ onError = () => { }, onSuccess = () => { } }) {
    return ({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            tandc: false,
        },
        validationSchema,
        onSubmit: async ({ email, password, confirmPassword }) => {
            try {
                const request = new SignUpRequest({ email, password, passwordConfirm: confirmPassword });
                const data = await userService.registerUser(request);
                onSuccess(data)
            } catch (e) {
                onError(e.message)
            }

        },
    })

}