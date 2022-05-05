import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { startRemoveProduct } from '../../action/productsAction'
import EditProduct from "./EditProduct"
import swal from "sweetalert";


const ProductItem = (props) => {
    const { obj } = props
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const handleRemove = (_id) => {
        const confirmRemove = window.confirm('Are you sure ?')
        if (confirmRemove) {
            dispatch(startRemoveProduct(_id))
        }
    }

    const handletoggle = () => {
        setToggle(!toggle)
    }

    const details = () => {
        swal(`Name  :  ${obj.name}
        Price  :  ${obj.price}
        Created At  :  ${obj.createdAt}
        Updated At  :  ${obj.updatedAt}`)
    }

    return (
        <div>
            
            {toggle ?
                (<div>
                    <EditProduct {...obj} handletoggle={handletoggle} />
                    <button onClick={handletoggle}>cancel</button></div>)
                : (

                    <div className="m-3" >

                        <div className="row">
                            <div className="col-2">
                                <h4 className="d-inline">{obj.name}  </h4>
                            </div>

                            <div className="col-2">
                                <h4 className="d-inline">{obj.price}  </h4>
                            </div>

                            <div className="col-2">
                                <button className="d-inline btn" style={{ color: '#000000', backgroundColor: '#B0E0E6' }} onClick={handletoggle}>EDIT</button>
                            </div>

                            <div className="col-2">
                                <h4 className="d-inline "> <button className="btn d-inline " style={{ color: '#000000', backgroundColor: '#B0E0E6' }} onClick={() => { details() }} >DETAILS</button></h4>
                            </div>

                            <div className="col-2">
                                <button className="d-inline btn" style={{ color: '#000000', backgroundColor: '#B0E0E6' }} onClick={() => {
                                    handleRemove(obj._id)
                                }}>DELETE</button>
                            </div>

                        </div>
                        <hr />
                    </div>
                )
            }

        </div>
    )
}

export default ProductItem