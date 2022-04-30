import React from "react";
import ProductsForm from "./ProductsForm";
import {startEditProduct} from "../../action/productsAction"
import { useDispatch } from "react-redux";

const EditProduct = (props) => {
    const {_id,name,price,handletoggle} = props

    const dispatch = useDispatch()

    const formSubmit = (formData) => {
        dispatch(startEditProduct(_id,formData,handletoggle))
    }

    return (
        <div>
           <ProductsForm  name={name} price={price} 
                formSubmit={formSubmit}
                />
        </div>
    )
}
export default EditProduct