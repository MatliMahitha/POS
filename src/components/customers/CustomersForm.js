import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "../TextField";
import * as Yup from 'yup'
const CustomersForm = (props) => {
    const { formSubmit, name: custName, email: custEmail, mobile: custMobile } = props
    const handleSubmit = (values, formReset) => {

        formSubmit(values, formReset)

    }
    const validate = Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 Characters or less')
            .required('Must be 15 Characters or less'),
        mobile: Yup.string()
            .min(10, 'Must be 10 Characters')
            .required('Must be 10 Characters'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is invalid')

    })
    return (

        <Formik
            initialValues={{
                name: custName ? custName : '',
                mobile: custMobile ? custMobile : '',
                email: custEmail ? custEmail : ''
            }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
                const formReset = () => {
                    resetForm({
                        name: '',
                        mobile: '',
                        email: ''
                    })
                }
                handleSubmit(values, formReset)
            }}
        >
            {formik => (
                <div className="d-inline">
                    <Form className="form-horizontal" role="form"> 
                    <div className="form-group">
                    <div className="form-group row">
                    <div className="col-md-3 ">
                    <TextField label='enter name' name='name' type='text' />
                    </div>
                    <div className="col-md-3">
                    <TextField label='enter mobile' name='mobile' type='text' />
                    </div>
                    <div className="col-md-3">
                    <TextField label='enter email' name='email' type='text' />
                    </div>
                    <div className="col-md-2">
                    <button className=" btn" style={{ color: '#000000', backgroundColor: '#B0E0E6' }}type='submit'>Submit</button><br />
                    </div>
                    </div>
                    </div>
                    </Form>
                </div>
            )}
        </Formik>
    )

}
export default CustomersForm