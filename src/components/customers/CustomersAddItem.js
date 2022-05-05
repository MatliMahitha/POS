import React from "react";
import { useDispatch } from "react-redux";
import { startCreateaCustomer } from "../../action/customersAction";
import CustomersForm from "./CustomersForm";
const CustomersAddItem=(props)=>{
    const dispatch=useDispatch()
    const formSubmit=(formData, formReset)=>{
        dispatch(startCreateaCustomer(formData,localStorage.getItem('token'),formReset))
        
    }
    return(
        <div className="shadow mb-5">
            <h2>Add Customers</h2>
           <CustomersForm formSubmit={formSubmit}/>
        </div>
    )
}
export default CustomersAddItem