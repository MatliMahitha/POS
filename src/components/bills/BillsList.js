import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Billitem from "./Billitem";
import { startGetBills } from "../../action/billsAction";
const BillsList = (props) => {
    const {_id}=props
    console.log('_id',_id)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(10)
    const bills = useSelector(state => { return state.bills })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetBills())
    }, [dispatch])
    const handleBack = () => {
        setStart(start - 10)
        setEnd(start)

    }
    const handleNext = () => {
        setStart(end)
        if (end + 10 > bills.data.length) {
            setEnd(bills.data.length)
        }
        else {
            setEnd(end + 10)
        }
    }
    const dataOrder = (orderBy) => {

        switch (orderBy) {
            case '': return [...bills.data]
            case orderBy: return [...bills.data.filter(ele => ele.customer=== _id||'')]
            default: return [...bills.data]
        }
    }

    return (<div>
        <h2 className="border p-3 mt-4 rounded" style={{ backgroundColor: '#B0E0E6', color: '#000000' }}>Listing Bills -{dataOrder(_id).length}

            <div className='d-inline' style={{ float: 'right' }}>
                <button className=" btn btn-outline-dark m-1 pb-0" style={{ backgroundColor: '#B0E0E6' }} onClick={handleBack} disabled={start < 10}><h4 >back</h4></button> 
                <button className="btn btn-outline-dark m-1 pb-0" style={{ backgroundColor: '#B0E0E6' }} onClick={handleNext} disabled={end >= bills.data.length}><h4>Next</h4></button></div>

        </h2>
        {
            dataOrder(_id).reverse().slice(start, end).map((ele, i) => {
                return <Billitem key={i} ele={ele}  />
            })
        }
    </div>)
}
export default BillsList
