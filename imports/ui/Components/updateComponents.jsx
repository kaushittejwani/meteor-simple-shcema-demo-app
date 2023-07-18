import React, { useEffect, useState } from 'react'
import { Meteor } from 'meteor/meteor';

const updateComponents = (props) => {
    
    const [username,setUserName]=useState(props.userData?props.userData.username:"");
    const [email,setEmail]=useState(props.userData?props.userData.email:"")
    const [password,setPassword]=useState("")
    const [mobileNo,setMobileNO]=useState(props.userData?props.userData.mobile.mobileNo:"")
    const [countryCode,setCountryCode]=useState(props.userData?props.userData.mobile.countryCode:"")
    const [street,setStreet]=useState(props.userData?props.userData.address.street:"")
    const [area,setArea]=useState(props.userData?props.userData.address.area:"")
    const [city,setCity]=useState(props.userData?props.userData.address.city:"")
    const [state,setState]=useState(props.userData?props.userData.address.state:"")
    

    const usercredentails={
        username:username,
        // email:email,
        mobile:{
          // mobileNo:mobileNo,
          countryCode:countryCode
        },
       
        isAdmin:false,
        password:password,
        createdAt:new Date().toISOString()
    }
     useEffect(()=>{

     },[props.userData._id])

     useEffect(()=>{
      setArea(props.userData.address.area)
      setCity(props.userData.address.city)
      setState(props.userData.address.state)
      setCountryCode(props.userData.mobile.countryCode)
      setStreet(props.userData.address.street)
      setUserName(props.userData.username)
      setMobileNO(props.userData.mobile.MobileNo)
      setEmail(props.userData.email)

     },[props.userData])


   const updateUser=(e)=>{
    Meteor.call('userDocuments.update',props.userData._id,usercredentails,(error,result)=>{
       if(error){
      alert(error.reason)
       }else{
        alert("user updated successfully")
       }
    }
    )
    setPassword("")
}
  return (
    <div>
        <div style={{"display":"flex","justifyContent":"center"}}>
            <h1> user Update form</h1>
        </div>
        <div style={{"display":"flex","justifyContent":"center"}}>
        <form>
        <label>username </label>&nbsp;&nbsp;&nbsp;&nbsp;
       <input style={{'height':"40px","width":"250px"}} type="text" value={username} placeholder='enter username' onChange={(e)=>setUserName(e.target.value)}></input><br></br><br></br>
       
       <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input style={{'height':"40px","width":"250px"}}type="text" value={email} placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>

       <label>Mobile No</label>&nbsp;&nbsp;&nbsp;&nbsp;
       <input style={{'height':"40px","width":"250px"}}type="text" value={mobileNo} placeholder='enter you phone no' onChange={(e)=>setMobileNO(e.target.value)}></input><br></br><br></br>
       
       
    <label>Code</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input style={{'height':"40px","width":"250px"}}type="text" value={countryCode} placeholder='enter you country code' onChange={(e)=>setCountryCode(e.target.value)}></input><br></br><br></br>
       
       <label>street  </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input style={{'height':"40px","width":"250px"}}type="text" value={street} placeholder='enter you street' onChange={(e)=>setStreet(e.target.value)}></input><br></br><br></br>
      
       <label>area  </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input style={{'height':"40px","width":"250px"}} type="text" value={area} placeholder='enter area' onChange={(e)=>setArea(e.target.value)}></input><br></br><br></br>
       
       <label>city  </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input style={{'height':"40px","width":"250px"}}type="text" value={city} placeholder='enter your city' onChange={(e)=>setCity(e.target.value)}></input><br></br><br></br>
      
       <label>State  </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input style={{'height':"40px","width":"250px"}}type="text" value={state} placeholder='enter your state' onChange={(e)=>setState(e.target.value)}></input><br></br><br></br>

       <label >Password  </label>&nbsp;&nbsp;
       <input style={{'height':"40px","width":"250px"}}type="text" value={password} placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}></input><br></br><br></br>
      <button style={{'height':"40px","width":"100px"}} type="button" onClick={()=>{updateUser();props.setUpdateOne(false)}}>update user</button>

    
     
       
       
       </form>
       </div>

    </div>

   
  )
}

export default updateComponents;
