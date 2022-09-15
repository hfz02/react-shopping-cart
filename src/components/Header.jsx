import React from 'react'
import './styles.css'

function Header(props) {
  const { countCartItems } = props

  return (
    <div className="row center block">
      <div>
        <a href="#/"><h2>Shopping Cart</h2></a>
      </div>
      <div>
        <a href="#/cart">
          Cart
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </div>
  )
}

export default Header