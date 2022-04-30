import React from "react";
import ProductsList from "./ProductsList";
import AddProduct from "./AddProduct";

const ProductsContainer = (props) => {
    return (
        <div>
             <AddProduct /> 
            <ProductsList />
           
        </div>
    )
}
export default ProductsContainer