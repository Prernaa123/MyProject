import { useState } from "react";
import '../styles/Merchantsignup.css'
import axios from "axios";

const MerchantSignup = () => {
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [password,setpassword]=useState("")
    let [gst_number,setgst_number]=useState("")


    let data={name,email,gst_number,phone,password}
    let addMerchant=(e)=>{
      e.preventDefault()
      axios.post(`http://localhost:8080/merchants`,data)
      .then((res)=>{
         console.log(res);
         alert("data added successfully")
      })
      .catch((err)=>{
         console.log(err);
         alert("data not found")
      })
    }
    return ( 
        <div className="merchantsignup">
            
            <form onSubmit={addMerchant} action="">
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} required/>               
                <label htmlFor="">Gst_Number</label>
             <input type="text" value={gst_number} onChange={(e)=>{setgst_number(e.target.value)}} required />
                <label htmlFor="">Email</label>
             <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} required />
                <label htmlFor="">Phone Number</label>
             <input type="text" value={phone} onChange={(e)=>{setphone(e.target.value)}} required />
                <label htmlFor="">Pasword</label>
             <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} required />
             <button className="btn btn-info">SignUp</button>
            </form>
        </div>
     );
}
 
export default MerchantSignup;