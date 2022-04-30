const usersInitialState={
    data:{}
}

const userReducer = (state = usersInitialState, action)=>{
    switch(action.type){
        case 'LOGOUT_USER':{
            return {...state,data:{}}
        }
        case "SET_USER_INFO":{
            return {...state,data:{...action.payload}}
        }
        default :{
             return {...state}
        }
    }
}

export default userReducer