import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const { cart } = useSelector(state => state.cart.cart)

  return (
    <>
        <nav>
            <div className="container">
                <Link to={`/react-shopping-cart`}>
                    <div className="navbar-left">
                        <button><h5>Home</h5></button>
                    </div>
                </Link>
                <Link to={`/react-shopping-cart/cart`}>
                    <div className="navbar-right">
                        <i className="fa fa-shopping-cart" /> Cart <span className="badge">{cart.length}</span>
                    </div> 
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar