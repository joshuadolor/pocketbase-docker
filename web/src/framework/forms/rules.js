export default {
    signin: {
        email: [
            {
                checker: (v) => !v,
                message: "Email is required",
            },
        ],
        password: [
            {
                checker: (v) => !v,
                message: "Password is required",
            },
        ],
        tandc: [
            {
                checker: (v) => !v,
                message: "You should agree to the Terms and Conditions",
            },
        ],
    }
};