import accountService from "@/application/services/account.service";
import SigninRequest from "@/application/requests/signin.request";
import validationSchema from "./sign-in.validationSchema";

export default function ({ onError = () => { }, onSuccess = () => { } }) {
    return ({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async ({ email, password }) => {
            try {
                const request = new SigninRequest({ email, password });
                const data = await accountService.signIn(request);
                onSuccess(data)
            } catch (e) {
                onError(e.message)
            }

        },
    })

}