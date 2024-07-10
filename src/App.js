// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Payment from './Components/Payment/Payment';
import PaymentSuccess from './Components/Payment/PaymentSuccess';
import Success from './Components/Payment/Success';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category ="kid"/>} />
          <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignUp/>} />
          <Route path='/payment' element={<Payment/>} component={Payment} />
          <Route path='/success' element={<PaymentSuccess />} component={PaymentSuccess} />
          <Route path='/successful' element={<Success />} component={Success} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
