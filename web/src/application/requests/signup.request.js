import FormData from "@/infrastructure/formdata";

class SignUpRequest extends FormData {
    constructor(data = {}) {
        super();
        this._email = data.email;
        this._password = data.password;
        this._passwordConfirm = data.passwordConfirm;
    }
}

export default SignUpRequest;
