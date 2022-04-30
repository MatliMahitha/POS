import axios from '../config/axios'

export const startAddItem = ( formData, token, formReset)=> {
    return (dispatch) => {
        axios.post('/products',formData,{
            headers : { Authorization : `Bearer ${token}`}
        })
        .then((response) => {
            const productObj = response.data
            dispatch(addItem(productObj))
            formReset()
        })
        .catch((err) => {
            alert('err.message')
        })
    }
}

export const startGetProducts = () => {
    return (dispatch) => {
        axios.get('/products',{
            headers : { Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const proArr = response.data
            dispatch(getItem(proArr))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startRemoveProduct = (_id) => {
    return (dispatch) => {
        axios.delete(`/products/${_id}`,{
            headers : { Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const proObj = response.data
            dispatch(deleteItem(proObj))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startEditProduct = (_id,formData,handletoggle) => {
    return (dispatch) => {
        axios.put(`/products/${_id}`,formData,{
            headers : { Authorization : `Bearer ${localStorage.getItem('token')}`}
        })
        .then((response) => {
            const proObj = response.data
            dispatch(editItem(proObj))
            handletoggle()
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const addItem = (productObj) => {
    return {
        type : 'ADD_ITEM',
        payload : productObj
    }
}
const getItem = (proArr) => {
    return {
        type : 'GET_ITEM',
        payload : proArr
    }
}
const deleteItem = (proObj) => {
    return {
        type : 'DELETE_ITEM',
        payload : proObj._id
    }
}
const editItem = (proObj) => {
    return {
        type : 'EDIT_ITEM',
        payload : proObj
    }
}