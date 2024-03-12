import { Link } from "react-router-dom";
import 'react-bootstrap'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/MerchantNavbar.css'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const MerchantNavbar = () => {
    return (
        <nav id="navbar">
        <div className="logo">
        {/* <ShoppingCartIcon/> */}
            <h1>Shoppers<span>Cart</span> </h1>
         
        </div>
        <div className="option">
            <Link to="/merchanthomepage/productview">Products</Link>
        </div>
        <div className="account">
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <AccountBoxIcon/>
        Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/merchanthomepage/updatemerchant">Edit Account</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
      
        </nav>
      );
}
 
export default MerchantNavbar;