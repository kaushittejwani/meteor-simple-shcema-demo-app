import React from 'react'

const showUserCollection = (props) => {

  return (
    <div>
      <h1>User Data</h1>
        
        {props.user.map((items)=>{
            return(
              <table>
            
              <tr>
                 <label>username:</label> <td style={{color:"pink"}}>{items.username}</td>,&nbsp;
                 <label>email:</label><td>{items.email}</td>,&nbsp;
                 <label>mobileNo:</label><td>{items.mobile.mobileNo}</td>,&nbsp;
                 <label>street:</label><td>{items.address.street}</td>,&nbsp;
                 <label>state:</label><td>{items.address.state}</td>&nbsp;
                 <button type="button" onClick={()=>{props.userId(items._id);props.setUpdate(true)}}>update</button>
                 <button type="button" onClick={()=>{props.userId(items._id);props.setDelete(true)}}>Delete</button>
              </tr>
              </table>
            )
          

        

        }
        )}
     
      
    </div>
  )
}

export default showUserCollection
