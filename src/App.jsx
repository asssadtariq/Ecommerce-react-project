import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={< ShopCategory category="men" />} />
          <Route path='/women' element={< ShopCategory category="women" />} />
          <Route path='/kids' element={< ShopCategory category="kids" />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
