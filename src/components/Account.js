import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { startgetUserInfo } from "../action/userAction"

const Account =() => {
    const dispatch = useDispatch()
   
    const user = useSelector((state) => {
      return state.user
    })

    useEffect(() => {
        dispatch(startgetUserInfo())
    },[dispatch]) 

  return (
    <div>
      <h4>Username - {user.data.username} </h4>
      <h4>Email - {user.data.email}</h4>
    </div>
  )
}

export default Account