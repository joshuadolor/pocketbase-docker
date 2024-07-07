import FormData from "@/infrastructure/formdata";

class ForgotPasswordRequest extends FormData {
    constructor(data = {}) {
        super();
        this._email = data.email;
    }
}

export default ForgotPasswordRequest;
