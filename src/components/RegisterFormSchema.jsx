import * as yup from 'yup';

export const RegisterFormSchema = yup.object().shape({

    email: yup.string().email("Please enter a valid email address!").required("Email is required!"),

    age: yup
        .number()
        .positive("Please enter a valid age!")
        .integer("Age must be an integer!")
        .min(18, "You must be at least 18 years old!")
        .required("Age is required!"),

    password: yup.string().required("Password is required!"),

    passwordConfirm: yup.string().required("Please re-enter your password!").oneOf([yup.ref("password")], "Passwords must match!"),

    term: yup.boolean().required("You must read and accept the terms.")
});
