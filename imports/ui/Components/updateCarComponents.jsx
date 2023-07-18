import React, { useEffect, useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { car } from "../../api/users/carMethod";
import ShowCarCollection from "./showCarCollection";
const updateCar = (props) => {
  const [carModel, setCarModel] = useState(props.carData?props.carData.carModel:"");
  const [carType, setCarType] = useState(props.carData?props.carData.carType:"");
  const [carNumber, setCarNumber] = useState(props.carData?props.carData.carNumber:"");
  const [address, setaddress] = useState(props.carData?props.carData.address:"");
  const [planDuration, setPlanDuration] = useState(props.carData?props.carData.planDuration:"");
  
 useEffect(()=>{
    setCarModel(props.carData.carModel);
    setCarType(props.carData.carType);
    setCarNumber(props.carData.carNumber);
    setaddress(props.carData.address);
    setPlanDuration(props.carData.planDuration)
 },[props.carData])

  const cardetails = {
    carModel: carModel,
    carNumber: carNumber,
    carType: carType,
    address: address,
    plan: planDuration,
    isActive: true,
    createdAt: new Date().toISOString(),
  };
  const updateDetails = (e) => {
    e.preventDefault();
    Meteor.call("cars.update",props.carData._id,cardetails,(error,result)=>{
        if(error){
            alert(error.reason)
        }else{
            alert("update car details successfully")
        }
    })
  }

  


  return (
    <div>
      <h1>Car updation Form </h1>
      <form onSubmit={updateDetails}>
        <label> enter your carModel</label>
        <br></br>
        <input
          style={{ height: "40px", width: "250px" }}
          type="text"
          value={carModel}
          placeholder="enter your Car Model"
          onChange={(e) => setCarModel(e.target.value)}
        ></input>
        <br></br>
        <label> enter your carNumber</label>
        <br></br>
        <input
          style={{ height: "40px", width: "250px" }}
          type="text"
          value={carNumber}
          placeholder="enter your Car Number"
          onChange={(e) => setCarNumber(e.target.value)}
        ></input>
        <br></br>
        <label>enter your carType</label>
        <br></br>
        <input
          style={{ height: "40px", width: "250px" }}
          type="text"
          value={carType}
          placeholder="enter your Car Type"
          onChange={(e) => setCarType(e.target.value)}
        ></input>
        <br></br>
        <label>enter your Address</label>
        <br></br>
        <input
          style={{ height: "40px", width: "250px" }}
          type="text"
          value={address}
          placeholder="enter your address"
          onChange={(e) => setaddress(e.target.value)}
        ></input>
        <br></br>
        <label>Select month</label>
        <br></br>
        <select
          style={{ height: "40px", width: "250px" }}
          value={planDuration}
          onChange={(e) => setPlanDuration(e.target.value)}
        >
          <option>select duration </option>
          <option>monthly</option>
          <option>Yearly</option>
        </select>
        <br></br>
        <button
          style={{ height: "40px", width: "250px" }}
          type="button"
          onClick={updateDetails}
        >
          update car details
        </button>

  
      </form>
     
    </div>
  );
};


export default updateCar
