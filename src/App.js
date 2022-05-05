import React from "react";
import Navbar from "./components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App =(props) => {
  
  return (
    <div className="m-3" >
      <h2>POS APP</h2>
      <Navbar />
    </div>
  )
}

export default App
