import { Routes,Route } from 'react-router-dom';
import '../styles/merchantHomepage.css'
import MerchantNavbar from './MerchantNavbar';
import ProductView from './ProductView';
const MerchantHomePage = () => {
    return (
        <div className="homepageMerchant">
            <MerchantNavbar/>
            <Routes>
                <Route path="/productview" element={<ProductView/>}/>
            </Routes>
        </div>
      );
}
 
export default MerchantHomePage;