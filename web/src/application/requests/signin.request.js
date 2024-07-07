import FormData from "@/infrastructure/formdata";

class SigninRequest extends FormData {
    constructor(data = {}) {
        super();
        this._identity = data.email;
        this._password = data.password;
    }
}

export default SigninRequest;
