class User {
    constructor(data) {
        this._email = data.email;
    }

    get email() {
        return this._email;
    }
}

export default User;