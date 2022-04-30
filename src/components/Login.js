import React from "react";
import { startLoginUser } from "../action/userAction";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from 'yup'
const Login = (props) => {
    const { handleAuth } = props
    const dispatch = useDispatch()
    const redirectToDashboard = () => {
        props.history.push('/dashboard')
    }
    const handleSubmit = (values) => {
        dispatch(startLoginUser(values, redirectToDashboard, handleAuth))
    }
    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is invalid'),
        password: Yup.string()
            .min(8, 'Must be 8 Character or more')
            .required('Must be 8 Character or more')
    })

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                handleSubmit(values)
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 fomt-weight -bold-display-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Login User</h1>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minheight: '100px' }}>
                        <Form>
                            <TextField label='enter email' name='email' type='text' />
                            <TextField label='enter password' name='password' type='password' />
                            <button className="btn btn-dark m-2" type='submit'>Login</button>
                            <button className="btn btn-dark"  type='reset'>Reset</button>
                        </Form>
                    </div></div>
            )}
        </Formik>
    )
}
export default Login