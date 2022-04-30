import React from "react";
import { useDispatch } from "react-redux";
import { startRegisterUser } from "../action/userAction";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from 'yup'
const Register = (props) => {
    const validate = Yup.object({
        username: Yup.string()
            .max(15, 'Must be 15 Character or less')
            .required('Must be 15 Character or less'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is invalid'),
        password: Yup.string()
            .min(8, 'Must be 8 Character or more')
            .required('Must be 8 Character or more'),
        businessName: Yup.string()
            .max(15, 'Must be 15 Charater or less'),
        address: Yup.string()
            .max(30, 'Must be 30 Charater or less')
    })

    const dispatch = useDispatch()
    const redirectToLogin = () => {
        props.history.push('/login')
    }
    const formSubmit = (formData) => {
        dispatch(startRegisterUser(formData, redirectToLogin));
    }
    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                businessName: '',
                address: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                formSubmit(values)
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 fomt-weight -bold-display-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Register User</h1>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minheight: '100px' }}>

                        <Form>
                            <TextField label='enter username' name='username' type='text' />
                            <TextField label='enter email' name='email' type='text' />
                            <TextField label='enter password' name='password' type='password' />
                            <TextField label='enter business name' name='businessName' type='text' />
                            <TextField label='enter address' name='address' type='text' />
                            <button className="btn btn-dark m-2" type='submit'>Register</button>
                            <button className="btn btn-dark" type='reset'>Reset</button>

                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}
export default Register