import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import '../styles/Usersignup.css'

const UserSignup = () => {
    let[name,setname]=useState("")
    let [email,setEmail]=useState("")
    let [phone,setPhone]=useState("")
    let [password,setPassword]=useState("")
    let [age,setage]=useState("")
    let[gender,setgender]=useState("")

    let data={name,email,phone,age,gender,password}
    let addUser=(e)=>{
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
        
              <div className="userLogin">
       
              <Form onSubmit={addUser}>
              <h1><b><i>User login Page</i></b></h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required value={name} onChange={(e)=>setname(e.target.value)}  type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control required value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control required value={age} onChange={(e)=>setage(e.target.value)} type="number" placeholder="age" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control required value={gender} onChange={(e)=>setgender(e.target.value)} type="gender" placeholder="gender" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <button className='btn btn-success mx-5' >Sign In</button>
                    <button className='btn btn-danger mx-5'><Link to="/usersignup">Sign Up</Link></button>
                </Form.Group>
              </Form>
            
        </div>
     );
}
 
export default UserSignup;