import React, { useState, useEffect } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PrivateRoute from "../helper function/privateRoute";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home"
import Account from './Account'
import CustomersContainer from "./customers/CustomersContainer";
import { logoutUser } from '../action/userAction'
import BillsContainers from "./bills/BillsContainers";
import ProductsContainer from "./products/ProductsContainer";
import ShowBillDetails from "./bills/ShowBillDetails";
import Dashboard from "./Dashboard";
import { startgetUserInfo } from "../action/userAction";
import { startGetAllCustomer } from "../action/customersAction"
import { startGetProducts } from "../action/productsAction"
import { startGetBills } from "../action/billsAction"

const Navbar = (props) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    const dispatch = useDispatch()

    const handleAuth = () => {
        setUserLoggedIn(!userLoggedIn)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            handleAuth()
            dispatch(startgetUserInfo())
            dispatch(startGetAllCustomer())
            dispatch(startGetProducts())
            dispatch(startGetBills())
        }
    }, [dispatch])

    return (
        <div>
            <div className="shadow  rounded p-3 mt-4 mb-4 ">
                <Link className="text-decoration-none " to='/'> <button className="d-inline btn btn-light ml-3 border-dark " ><h3>Home</h3></button></Link>
                {
                    userLoggedIn ?
                        <>
                            <Link className="text-decoration-none" to="/account"> <button className="d-inline btn btn-light border-dark"><h3>UserAccount</h3></button></Link>
                            <Link className="text-decoration-none" to='/dashboard'> <button className="d-inline btn btn-light border-dark" ><h3>Dashboard</h3></button></Link>
                            <Link className="text-decoration-none" to='/customers'> <button className="d-inline btn btn-light border-dark"><h3>Customers</h3></button></Link>
                            <Link className="text-decoration-none" to='/products'> <button className="d-inline btn btn-light border-dark" ><h3>Products</h3></button></Link>
                            <Link className="text-decoration-none" to='/bills'> <button className="d-inline btn btn-light border-dark" ><h3>Bills</h3></button></Link>


                            <div className="d-inline" style={{ float: 'right' }}>
                                <Link className="text-decoration-none" to='/'><button className="d-inline btn btn-light border-dark "
                                    onClick={() => {
                                        localStorage.removeItem('token')
                                        handleAuth()
                                        dispatch(logoutUser())
                                    }}><h3>Logout</h3></button></Link>
                            </div>
                        </>
                        :
                        <div className="d-inline" style={{ float: 'right' }}>
                            <Link className="text-decoration-none m-1" to='/register'><button className="d-inline btn btn-light border-dark"><h3 className="d-inline" >Register</h3></button></Link>
                            <Link className="text-decoration-none m-1" to='/login'><button className="d-inline btn btn-light border-dark"><h3 className="d-inline" >Login</h3></button></Link>
                        </div>
                }
            </div>
            <Route path='/' component={Home} exact />
            <Route path='/register' component={Register} exact />
            <Route path="/login" render={(props) => {
                return <Login
                    {...props}
                    handleAuth={handleAuth} />
            }} />
            <PrivateRoute path="/account" component={Account} exact={true} />
            <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
            <PrivateRoute path="/customers" component={CustomersContainer} exact={true} />
            <PrivateRoute path='/bills' component={BillsContainers} exact={true} />
            <PrivateRoute path='/products' component={ProductsContainer} exact={true} />
            <PrivateRoute path='/bills/:_id' exact={true} component={ShowBillDetails} />
        </div>
    )
}
export default withRouter(Navbar)

