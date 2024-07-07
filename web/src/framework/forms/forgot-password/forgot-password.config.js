import accountService from "@/application/services/account.service";
import ForgotPasswordRequest from "@/application/requests/forgot-password.request";
import validationSchema from "./forgot-password.validationSchema";

export default function ({ onError = () => { }, onSuccess = () => { } }) {
    return ({
        initialValues: {
            email: "",
        },
        validationSchema,
        onSubmit: async ({ email }) => {
            try {
                const request = new ForgotPasswordRequest({ email });
                const data = await accountService.forgotPassword(request);
                onSuccess(data)
            } catch (e) {
                onError(e.message)
            }

        },
    })

}