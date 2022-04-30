import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {startgetUserInfo } from "./action/userAction";
import {startGetAllCustomer} from "./action/customersAction"
import {startGetProducts} from "./action/productsAction"
import {startGetBills} from "./action/billsAction"
import { useDispatch } from "react-redux";

const App =(props) => {
  const [userLoggedIn,setUserLoggedIn] = useState(false)

  const dispatch = useDispatch()

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      handleAuth()
      dispatch(startgetUserInfo())
      dispatch(startGetAllCustomer())
      dispatch(startGetProducts())
      dispatch(startGetBills())
    }
  },[])

  return (
    <div className="m-3" >
      <h2>POS APP</h2>
      <Navbar handleAuth={handleAuth} userLoggedIn={userLoggedIn}/>
    </div>
  )
}

export default App
