const productsInitialState = {
    data : []
}

const productsReducer = (state = productsInitialState, action) => {
    //console.log('prored', action.payload)
    switch(action.type){
        case 'ADD_ITEM' : {
            return  {...state, data : [{...action.payload},...state.data]}
        }
        case 'GET_ITEM' : {
            return {...state, data : [...action.payload]}
        }
        case 'DELETE_ITEM' : {
            return {...state, data :  state.data.filter((ele) => {
                return ele._id !== action.payload
            })}
        }
        case 'EDIT_ITEM' : {
            return {...state,data : state.data.map((ele) => {
                if(ele._id === action.payload._id) {
                    return {...action.payload}
                } else {
                    return {...ele}
                }
            })}
        }
    default : {
        return {...state}
    }}
}

export default productsReducer