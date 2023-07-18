import React from 'react'

const ShowCarCollection = (props) => {
  const returnCar=()=>{
    props.setreturnUpdate((user) => (user = !props.returnUpdate));
     
  }
  return (
    <div>
        
      <table style={{textAlign:"right"}}>
        <tr >
            <label>Car Model :</label>
            <td>{props.task.carModel},</td>&nbsp;&nbsp;
            <label>Car Number :</label>
            <td>{props.task.carNumber},</td>&nbsp;&nbsp;
            <label>Car Type :</label>
            <td>{props.task.carType},</td>&nbsp;&nbsp;
            <label> Address :</label>
            <td>{props.task.address},</td>&nbsp;&nbsp;
            <label>Plan :</label>
            <td>{props.task.plan}</td>&nbsp;&nbsp;
            <button type="button" onClick={()=>{props.setUserId(props.task._id);props.setUpdate(true); returnCar}
          
          }>update</button>
            <button type="button" onClick={()=>{props.setUserId(props.task._id);props.setDelete(true)}}>delete</button>
        </tr>
      </table>
    </div>
  )
}

export default ShowCarCollection
