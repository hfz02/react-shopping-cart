import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Product from "./components/Product"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import "./App.css"

function App() {

  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:productId" exact element={<Product />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/checkout" exact element={<Checkout />} />
      </Routes>
  )
}

export default App
