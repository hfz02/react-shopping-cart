import { Routes, Route } from "react-router-dom"
import Home from "./simple-sc/components/Home"
import Product from "./simple-sc/components/Product"
import Cart from "./simple-sc/components/Cart"
import Checkout from "./simple-sc/components/Checkout"
import "./App.css"

function App() {

  return (
      <Routes>
        <Route path="/react-shopping-cart" exact element={<Home />} />
        <Route path="/react-shopping-cart/product/:productId" exact element={<Product />} />
        <Route path="/react-shopping-cart/cart" exact element={<Cart />} />
        <Route path="/react-shopping-cart/checkout" exact element={<Checkout />} />
      </Routes>
  )
}

export default App
