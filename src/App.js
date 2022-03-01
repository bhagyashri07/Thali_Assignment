import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Product from './components/Product';
import Order from './components/Order';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/Menu" element={<Menu />} />
        <Route path='/Product' element={<Product/>}/>
        <Route path="/Order" element={<Order />} />
        <Route path="/Cart" element={<Cart />} />
       </Routes>
     </ BrowserRouter>
     
    </div>
  );
}

export default App;