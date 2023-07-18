import React, { useEffect, useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { car } from "../../api/users/carMethod";
import ShowCarCollection from "./showCarCollection";
import UpdateCar from "./updateCarComponents";
const cars = () => {

    Meteor.subscribe('cars')
  const [carModel, setCarModel] = useState("");
  const [carType, setCarType] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [address, setaddress] = useState("");
  const [planDuration, setPlanDuration] = useState("");
  const[userId,setUserId]=useState("");
  const [carData,setCarData]=useState('')
  const [update,setUpdate]=useState(false)
  const [Delete,setDelete]=useState(false)
  const[returnUpdate,setreturnUpdate]=useState(false)
  const cardetails = {
    carModel: carModel,
    carNumber: carNumber,
    carType: carType,
    address: address,
    plan: planDuration,
    isActive: true,
    createdAt: new Date().toISOString(),
  };
  const saveDetails = (e) => {
    e.preventDefault();
    Meteor.call("cars.insert", cardetails, (error, result) => {
      if (error) {
        alert(error.reason);
      } else {
        alert("car successfully registered");
      }
    });
    setCarData("");
    setCarModel("")
    setCarNumber("");
    setPlanDuration("");
    setaddress("");
    setCarType("");
  };

  const showCars=useTracker(()=>{return car.find({}).fetch()})

  useEffect(()=>{
    if(userId && update){
      Meteor.call('cars.findOne',userId,(error,result)=>{
        if(error){
          alert(error.reason)
        }else{
          setCarData(result)
        }
      })
    }else{
      if(userId && Delete){
        Meteor.call('cars.delete',userId,(error,result)=>{
          if(error){
             alert(error.reason)
          }else{
            alert("car deleted successfully")
          }
        })
      }
    }
  },[userId])


 

 

  return (
    <div>
      <h1>Car Register Form </h1>
      <form onSubmit={saveDetails}>
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
          type="submit"
          onClick={saveDetails}
        >
          Register
        </button>
  
      </form>
      <h1>Car Data</h1>
      { showCars && showCars.map((task,i)=> <ShowCarCollection  key={i} setDelete={setDelete} task={ task } setUpdate={setUpdate} 
      setUserId={setUserId} setreturnUpdate={setreturnUpdate} returnUpdate={returnUpdate}/>) }
      
      {carData && <UpdateCar   carData={carData} />}
    </div>
  );
};

export default cars;
