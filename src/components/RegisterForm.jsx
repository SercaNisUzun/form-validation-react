import React from 'react'
import { useFormik } from 'formik';
import { RegisterFormSchema } from './RegisterFormSchema';
import '../RegisterFormCss.css'

function RegisterForm() {

    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000)
    }

    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            passwordConfirm: "",
            term: "",
        },
        validationSchema: RegisterFormSchema,
        onSubmit: submit
    })

    return (
        <div className='formCard'>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>E-Mail</label>
                    <input type="text" id='email' placeholder='Please enter your E-Mail address.'
                        value={values.email} onChange={handleChange} />
                    {errors.email && touched.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label>Age</label>
                    <input type="number" id='age' placeholder='Please enter your age.'
                        value={values.age} onChange={handleChange} />
                    {errors.age && touched.age && <p>{errors.age}</p>}
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" id='password' placeholder='Please enter your password.'
                        value={values.password} onChange={handleChange} />
                    {errors.password && touched.password && <p>{errors.email}</p>}
                </div>

                <div>
                    <label>Re-Password</label>
                    <input type="password" id='passwordConfirm' placeholder='Please enter your password again.'
                        value={values.passwordConfirm} onChange={handleChange} />
                    {errors.passwordConfirm && touched.passwordConfirm && <p>{errors.passwordConfirm}</p>}
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <input style={{ height: "12px", width: "12px", marginRight: "5px" }} type="checkbox" id='term'
                        value={values.term} onChange={handleChange} />
                    <label>Terms and Conditions</label>
                    {errors.term && touched.term && <p style={{ marginLeft: "15px" }}>{errors.term}</p>}
                </div>
                <button type='submit'>Save</button>
            </form>

        </div>
    )
}

export default RegisterForm
