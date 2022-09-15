import React from 'react'
import Product from './Product'
import './styles.css'

function Main(props) {
  const { cartItems, products, addItem, removeItem } = props

  return (
    <div className='block col-2'>
        <h2>Products</h2>
        <div className="row">
          {products.map(product => (
            <Product 
              key={product.id} 
              product={product}
              item={cartItems.find(x => x.id === product.id)}
              addItem={addItem}
              removeItem={removeItem} 
            ></Product>
          ))}
        </div>
    </div>
  )
}

export default Main