import React, { useState } from "react";
import CustomersEditItem from "./CustomersEditItem";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { startRemoveCustomer } from '../../action/customersAction'
const CustomersItem = (props) => {
    const { obj } = props
    const [toggle, setToggle] = useState(false)
    const dispatch=useDispatch()
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    const details=()=>{
        swal(`Name  :  ${obj.name}
        Email  :  ${obj.email}
        Mobile  :  ${obj.mobile}
        Created At  :  ${obj.createdAt}
        Updated At  :  ${obj.updatedAt}`)
    }
    return (
        <div>
            {
                toggle ?<div>
                    <CustomersEditItem  obj={obj} handleToggle={handleToggle}/>
                    <button className='d-inline btn btn-dark mt-3' onClick={handleToggle}>Cancel</button>
                </div>
              :
                    <div  className="m-3" scope="row">
                         
                        
                        <div className="row" >
                            <div className="col-2">
                            <h4 className="d-inline">{obj.name}  </h4>
                            </div>

                            <div className="col-4">
                            <h4 className="d-inline">{obj.email}</h4>
                            </div>

                            <div className="col-2">
                            <h4 className="d-inline">{obj.mobile}</h4>
                            </div>

                            <div className="col-1">
                            <button className="d-inline btn" style={{ color: '#000000', backgroundColor: '#B0E0E6' }} onClick={()=>
                                {dispatch(startRemoveCustomer(obj._id))}}>DELETE</button>
                            </div>

                            <div className="col-1">
                            <button className="d-inline btn" style={{ color: '#000000', backgroundColor: '#B0E0E6' }} onClick={handleToggle} >EDIT</button>
                            </div>

                            <div className="col-1">
                            <button className="d-inline btn" style={{ color: '#000000', backgroundColor: '#B0E0E6' }} onClick={()=>{details()}} >DETAILS</button>
                            </div>
                        </div>
                    
                        <hr/>
                    </div>
          }
        </div>
    )
}

export default CustomersItem