import React from "react";
import Image from "../Image/Billing.gif"

const Home=(props)=>{
  return(
        
    <div className="container home">
    <div className="home_body" style={{backgroundImage : Image, display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <img src={Image} alt="img" />
    </div>
    </div>
    )
}
export default Home