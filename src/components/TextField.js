import React from "react"
import {ErrorMessage, useField } from "formik";
import '../App.css'

export const TextField=({label,...props})=>{
    const [field,meta]=useField(props)
    return(
        <div className="mb-2" >
            <input className={`form-control shadow-none ${meta.touched&& meta.error && 'is-invalid'}`}
            style={{display:'inline'}}
            {...field}{...props}
            placeholder={label}/>
            <ErrorMessage name={field.name} className='error' component="div"/>
        </div>
    )
}
