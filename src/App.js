import { Routes, Route } from "react-router-dom"
import Products from "./simple-sc/components/Products"
import Product from "./simple-sc/components/Product"
import Cart from "./simple-sc/components/Cart"
import "./App.css"

function App() {
  return (
      <Routes>
        <Route path="/react-shopping-cart" element={<Products />} />
        <Route path="/react-shopping-cart/product/:productId" element={<Product />} />
        <Route path="/react-shopping-cart/cart" element={<Cart />} />
      </Routes>
  )
}

export default App
