import React from "react";
import { useDispatch } from 'react-redux'
import ProductsForm from "./ProductsForm";
import { startAddItem } from "../../action/productsAction";


const AddProduct = (props) => {

    const dispatch = useDispatch()

    const formSubmit = (formData,formReset) => {
        dispatch(startAddItem(formData,localStorage.getItem('token'),formReset))
    }

    return (
        <div className="shadow mb-5">
           
            <h2>Add products</h2>
            <ProductsForm formSubmit={formSubmit}/>

        </div>
    )
}
export default AddProduct