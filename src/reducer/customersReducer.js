const initialCustomerState={
    data:[],error:{},loading:false
}
const customersReducer=(state=initialCustomerState,action)=>{
    //console.log(action.payload);
    switch(action.type){
        case 'ADD_CUSTOMER': {
            return {...state,data:[{...action.payload},...state.data]}
        }
        case 'GET_CUSTOMER': {
            return {...state,data:[...action.payload]}
        }
        case 'REMOVE_CUSTOMER': {
            return {...state, data:state.data.filter(obj=>{return obj._id!==action.payload})}
        }
        case 'UPDATE_CUSTOMER': { 
            return {...state, data:state.data.map(obj=>{
            if(obj._id === action.payload._id)
            {
                return {...action.payload}
            }
            else{
               return {...obj}
            }
        })}
    }
        case "TOGGLE_LOADING" : {
            return {...state, loading : !state.loading}
        }
        default : return {...state}
    }
}
export default customersReducer