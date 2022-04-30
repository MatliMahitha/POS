import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import CustomersItem from "./CustomersItem";
import { startGetAllCustomer } from "../../action/customersAction";
const CustomersList = (props) => {
    const customers = useSelector((state) => {
        return state.customers
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetAllCustomer(localStorage.getItem('token')))
    }, [dispatch])

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(10)

    const [orderBy, setOrderBy] = useState('')
    const handleOrderBy = (e) => {
        setOrderBy(e.target.value)
    }
    const [searchKey, setSearchKey] = useState('')

    const handleSearchKey = (e) => {
        setSearchKey(e.target.value)
    }
    const dataOrder = (orderBy) => {

        switch (orderBy) {
            case 'A-Z': return [...[].concat(customers.data).sort((a, b) => a.name.localeCompare(b.name))]
            case 'Z-A': return [...[].concat(customers.data).sort((a, b) => b.name.localeCompare(a.name))]
            case 'Reverse': return [...[].concat(customers.data).reverse()]
            default: return [...customers.data]
        }
    }
    const handleBack = () => {
        setStart(start - 10)
        setEnd(start)

    }
    const handleNext = () => {
        setStart(end)
        if (end + 10 > dataOrder(orderBy).filter(ele => {
            return ele.name.toLowerCase().includes(searchKey)
        }).length) {
            setEnd(dataOrder(orderBy).filter(ele => {
                return ele.name.toLowerCase().includes(searchKey)
            }).length)
        }
        else {
            setEnd(end + 10)
        }
    }
    return (<div>
        {
            customers.loading ? ('loading') : (
                <div className="shadow mb-4" >
            <div className="rounded p-3" style={{ color: '#000000', backgroundColor: '#B0E0E6' }}>
                <h2>Listing Customers -{customers.data.length}
                    <div className="d-inline" style={{ float: 'right' }}>
                        <input type='name' value={searchKey} className="form-control  d-inline m-1" style={{ width: '30%' }} onChange={handleSearchKey} placeholder='Search By Name ....' />

                        <select value={orderBy} onChange={handleOrderBy} className="form-select m-1 d-inline" style={{ width: '25%' }} >
                            <option>  Order By</option>
                            <option value='A-Z'>A-Z Order</option>
                            <option value='Z-A'>Z-A Order</option>
                            <option value='Reverse'>Reverse Order</option>
                        </select>
                        <button className=" btn btn-outline-dark m-1 pb-0" style={{ backgroundColor: '#B0E0E6' }} onClick={handleBack} disabled={start < 10}><h4>back</h4></button>
                        <button className="btn btn-outline-dark m-1 pb-0"  style={{ backgroundColor: '#B0E0E6' }} onClick={handleNext} disabled={end >= dataOrder(orderBy).filter(ele => {
                        return ele.name.toLowerCase().includes(searchKey)
                    }).length}><h4>Next</h4></button>

                    </div>
                </h2></div>

                
            {
                dataOrder(orderBy).filter(Obj => {
                    return Obj.name.toLowerCase().includes(searchKey)
                }).slice(start, end).map((obj, i) => {
                    return (
                        <CustomersItem key={i} obj={obj} />
                    )
                })
            }
        </div>
            )
        }
        </div>
    )
}
export default CustomersList