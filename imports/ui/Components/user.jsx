import React, { useEffect, useState } from "react";
import { Meteor } from "meteor/meteor";
import ShowUserCollection from "./showUserCollection";
import UpdateComponents from "./updateComponents";
import { useTracker } from "meteor/react-meteor-data";
import { CarSchema } from "../../api/users/carMethod";
import Car from "./car";


const user = () => {
  Meteor.subscribe('users')
  const [userData, setUserData] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNO] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [returnUser, setReturnUser] = useState(false);
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState("");
  const [Delete, setDelete] = useState(false);
  const [update, setUpdate] = useState(false);
  const[returnUpdate,setreturnUpdate]=useState(true)
  const [updateOne ,setUpdateOne]=useState(false)

  const showAllUsers=useTracker(()=>{return Meteor.users.find({}).fetch()})
  const usercredentails = {
    
    username: username,
    email: email,
    mobile: {
      mobileNo: mobileNo,
      countryCode: countryCode,
    },
    address: {
      street: street,
      area: area,
      city: city,
      state: state,
    },
    isAdmin: false,
    password: password,
    createdAt: new Date().toISOString(),
  };

  useEffect(() => {
    if (userId && Delete) {
      Meteor.call("userDocuments.delete", userId, (error, result) => {
        if (error) {
          alert(error.reason);
        } else {
          alert("user deleted successfull");
        }
      });
    } else {
      if (userId && update)
        Meteor.call("userDocuments.findOne", userId, (error, result) => {
          if (error) {
            console.log(error);
          } else {
            setUserData(result);
          }
        });
    }
  }, [userId]);

  const handleUser = (e) => {
    e.preventDefault();
    Meteor.call("userDocuments.insert", usercredentails, (error, result) => {
      if (error) {
        alert(error.reason);
        return;
      } else {
        alert("user insert successfully", result);
        
      }
    });
    setArea("");
    setCity("")
    setCountryCode("")
    setMobileNO("")
    setEmail("")
    setPassword("")
    setState("")
    setStreet("")
    setUserName("")

  };

  
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>User Registeration Form</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleUser}>
          <label>username </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ height: "40px", width: "250px" }}
            type="text"
            value={username}
            placeholder="enter username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>Email</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ height: "40px", width: "250px" }}
            type="text"
            value={email}
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>Mobile No</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ height: "40px", width: "250px" }}
            type="text"
            value={mobileNo}
            placeholder="enter you phone no"
            onChange={(e) => setMobileNO(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>Code</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ height: "40px", width: "250px" }}
            type="text"
            value={countryCode}
            placeholder="enter you country code"
            onChange={(e) => setCountryCode(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>street </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ height: "40px", width: "250px" }}
            type="text"
            value={street}
            placeholder="enter you street"
            onChange={(e) => setStreet(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>area </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ height: "40px", width: "250px" }}
            type="text"
            value={area}
            placeholder="enter area"
            onChange={(e) => setArea(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>city </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ height: "40px", width: "250px" }}
            type="text"
            value={city}
            placeholder="enter your city"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>State </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ height: "40px", width: "250px" }}
            type="text"
            value={state}
            placeholder="enter your state"
            onChange={(e) => setState(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>Password </label>&nbsp;&nbsp;
          <input
            style={{ height: "40px", width: "250px" }}
            type="text"
            value={password}
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <button
            style={{ height: "40px", width: "100px" }}
            type="submit"
            onClick={handleUser}
          >
            sign in
          </button>
        {showAllUsers && <ShowUserCollection  userId={setUserId}
              user={showAllUsers}
              setUpdate={setUpdate}
              setDelete={setDelete}
              setreturnUpdate={setreturnUpdate}
              returnUpdate={returnUpdate}
            />}
          <Car />
          {/* {users && returnUser && (
            <ShowUserCollection
              userId={setUserId}
              user={users}
              setUpdate={setUpdate}
              setDelete={setDelete}
              setreturnUpdate={setreturnUpdate}
              returnUpdate={returnUpdate}
            />
          )} */}
          {userData  && (
            <UpdateComponents
              userData={userData}
              setUserData={setUserData}
              setUserId={setUserId}
              setUpdateOne={setUpdateOne}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default user;
