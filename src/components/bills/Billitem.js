import React from "react";
import { Link } from "react-router-dom";
import { startDeleteBills } from '../../action/billsAction';
import { useDispatch, useSelector } from "react-redux";
const Billitem = (props) => {
    const dispatch = useDispatch()
    const { ele } = props
    console.log('ele',ele)
    const customers = useSelector(state => state.customers.data)
    console.log('cus',customers)
    const customerName = (customers.find(ele1 => ele1._id === ele.customer));
    console.log('customername',customerName)
   
     return (
        <div  className="m-3" >
            <div className="row">
                <div className="col-3">
                 <h3 className="d-inline " >{ customerName && customerName.name}</h3>
                </div>

                <div className="col-3">
                    <h3 className="d-inline">{ele.date.slice(0, 10)}</h3>
                </div>

                <div className="col-2">
                    <h3 className="d-inline">{ele.total}</h3>
                </div>

                <div className="col-2">
                    <button className="d-inline btn" style={{ color: '#000000', backgroundColor: '#B0E0E6' }} ><Link to={`/bills/${ele._id}`} style={{ backgroundColor: '#B0E0E6', color: '#000000' }}>Details</Link></button>
                </div>

                <div className="col-2" >
                    <button className="d-inline btn" style={{ color: '#000000', backgroundColor: '#B0E0E6' }} onClick={() => { dispatch(startDeleteBills(ele._id)) }}>Delete</button>
                </div>

            </div>
            <hr/>
    
        </div> 
    )
}
export default Billitem

        