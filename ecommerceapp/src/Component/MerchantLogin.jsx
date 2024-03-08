import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/MerchantLogin.css'

const MerchantLogin=()=>{
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")

  let navigate= useNavigate()
  function verifyMerchant(e){
    e.preventDefault()
    axios.post(`http://localhost:8080/merchants/verify-by-email?email=${email}&password=${password}`)
    .then(()=>{
      navigate('/merchanthomepage')
     alert("login successful")})
    .catch((err)=>{console.log(err);
       alert("invalid ceredentials")
      })
   }

    return ( 
        <div className="merchantLogin">
        <h1><b><i>Merchant login Page</i></b></h1>

              <Form onSubmit={verifyMerchant}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <button className='btn btn-success mx-5' >Sign In</button>
                    <button className='btn btn-danger mx-5'><Link to="/merchantsignup">Sign Up</Link></button>
                </Form.Group>
              </Form>
        </div>
     );
}

 
export default MerchantLogin;