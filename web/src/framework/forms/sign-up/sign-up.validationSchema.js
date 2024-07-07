import * as Yup from 'yup';

export default Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.mixed().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm your password'),
    tandc: Yup.bool().isTrue('You need to agree to the Terms and conditions')
});
