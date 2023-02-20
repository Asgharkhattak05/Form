import React, { useState } from "react";
import './index.css';

const App =()=>{

  const[fullName,setFullName]=useState({
    fName:"",
    lName:"",
    email:"",
    mNumber:""
  });
  

    const inputEvent=(event)=>{
      // console.log(event.target.value)
      // console.log(event.target.name)
      const value=(event.target.value)
      const name=(event.target.name)
      const email=(event.target.email)
      const mNumber=(event.target.mNumber)

      
       setFullName((preValue)=>{
        if(name==="fName"){
          return{
            fName:value,
            lName:preValue.lName,
            email:preValue.email,
            mNumber:preValue.mNumber
          }
        }
        else if(name==="lName"){
          return{
            lName:value,
            fName:preValue.fName,
            email:preValue.email,
            mNumber:preValue.mNumber
          }
        }
        else if(name==="email"){
          return{
            lName:value.preValue,
            fName:preValue.fName,
            email:email,
            mNumber:preValue.mNumber
          }
        }
        else if(name==="mNumber"){
          return{
            lName:preValue.value,
            fName:preValue.fName,
            email:preValue.email,
            mNumber:mNumber
          }
        }
      })
    
    }
    
    const OnSubmit=(event)=>{
      event.preventDefault();
      alert("Form Submitted")
       
    }
  
  return ( 
    <>
      <form onSubmit={OnSubmit}>
      <div className="mainDiv">
        <h1 >Facebook { fullName.fName}{fullName.lName}</h1>
        <p>Email:{fullName.email}</p>
        <p>{fullName.mNumber} </p>
        <input 
           type="text" 
           placeholder="Please Enter Your First Name" 
           name="fName"
           onChange={inputEvent}
           value={fullName.fName} 
        />
        <br/>
        <input 
           type="text" 
           placeholder="Please Enter Your Last Name "
           name="lName" 
           onChange={inputEvent}
           value={fullName.lName} 
        />
        <br/>
        <input 
           type="email" 
           placeholder="Please Enter Your Email"
           name="email" 
           onChange={inputEvent}
           value={fullName.email} 
           autoComplete="off"
        />
        <br />
        <input 
           type="mNumber" 
           placeholder="Please Enter Your mobile Number"
           name="mNumber" 
           onChange={inputEvent}
           value={fullName.mNumber} 
        />
        <button  type="submit">Sign Up</button>
      </div>
      </form>
    </>
  );
};
export default App