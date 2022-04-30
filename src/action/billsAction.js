import axios from "../config/axios"

export const startCreateBill = (formData,formReset) => {
    //console.log('add',formData)
    return(dispatch) => {
        axios.post('/bills',formData,{
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const billObj = response.data
            //console.log('add',billObj)
            dispatch(addBill(billObj))
            formReset()
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startGetBills =() => {
    return(dispatch) => {
        axios.get('/bills', {
            headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) =>{
            const billsArr = response.data
            console.log('bills',billsArr)
            dispatch(getBills(billsArr))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startDeleteBills=(_id)=>{
    return  (dispatch)=>{
         axios.delete(`/bills/${_id}`,{
             headers:{ Authorization : `Bearer ${localStorage.getItem('token')}`}
         })
         .then(response=>{
             dispatch(deleteBill(response.data._id))
         })
         .catch(err=>console.log(err.message))
     }
 }

const addBill = (billObj) => {
    return {
        type : 'ADD_BILL',
        payload : billObj
    }
}

const getBills = (BillsArr) => {
    return {
        type : 'GET_BILLS',
        payload : BillsArr
    }
}
export const deleteBill=(_id)=>{
    return{
        type:'DELETE_BILL',payload:_id
    }
}
