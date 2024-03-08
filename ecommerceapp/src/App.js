import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import UserLogin from './Component/UserLogin';
import MerchantLogin from './Component/MerchantLogin';
import MerchantSignup from './Component/MerchantSignup';
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantHomePage from './Component/MerchantHomePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/user" element={<UserLogin/>}/>
          <Route path="/merchant"element={<MerchantLogin/>}/>
          <Route path="/merchantsignup"element={<MerchantSignup/>}/>
          <Route path="/merchanthomepage"element={<MerchantHomePage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
