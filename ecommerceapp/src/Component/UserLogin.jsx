import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../styles/UserLogin.css'

const UserLogin = () => {
    return ( 
        <div className="userLogin">
            
            
            <Form>
            <h1><b><i>User</i></b></h1>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group>
    <button className='btn btn-success mx-5'>Sign In</button>
    <button className='btn btn-danger mx-5'><Link to="/usersignup">Sign Up</Link></button>
    </Form.Group>
    </Form>
        </div>
     );
}
 
export default UserLogin