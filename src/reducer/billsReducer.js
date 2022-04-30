const initialBillsState= {
    data: []
}

const billsReducer = (state = initialBillsState ,action) => {
    switch(action.type) {
        case 'ADD_BILL' : {
            return {...state, data : [{...action.payload},...state.data]}
        }
        case 'GET_BILLS' : {
            return {...state , data : [...action.payload]}
        }
        case 'DELETE_BILL':return {...state,data:[...state.data.filter(ele=>ele._id !== action.payload)]}
        default : {
            return {...state}
        }
    }
}

export default billsReducer