import axios from "../config/axios";
import {startGetAllCustomer} from "./customersAction"
import {startGetProducts} from "./productsAction"
import { startGetBills } from "./billsAction";

export const startRegisterUser=(formData,redirectToLogin)=>{
    //console.log(formData);
    return (dispatch)=>{
        axios.post('/users/register',formData)
        .then((response)=>{
            const result = response.data
            //console.log('register',result)
            if(result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
                alert('succesfully created an account')
                redirectToLogin()
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startLoginUser=(formData,redirectToDashboard,handleAuth)=>{
    //console.log(formData);
    return (dispatch)=>{
        axios.post('/users/login',formData)
        .then((response)=>{
            const result = response.data
            //console.log('login',result)
            if(result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
                alert('succesfully logged in')
                localStorage.setItem('token',result.token)
                dispatch(startgetUserInfo())
                dispatch(startGetAllCustomer())
                dispatch(startGetProducts())
                dispatch(startGetBills())
                redirectToDashboard()
                handleAuth()
            }
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
}

export const startgetUserInfo=()=>{
    return (dispatch)=>{
        axios.get('/users/account',{
           headers:{ Authorization : `Bearer ${localStorage.getItem('token')}`}
        }
        )
        .then((response)=>{
           const userinfo=response.data
                dispatch(getUserInfo(userinfo))
                
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
}

export const logoutUser=()=>{
    return {
         type:'LOGOUT_USER'
    }
}
export const getUserInfo=(userinfo)=>{
    return {
        type:"SET_USER_INFO",
        payload:userinfo
    }
}