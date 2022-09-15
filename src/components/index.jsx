import React from 'react'
import Header from './Header'
import Main from './Main'
import Basket from './Basket'
import data from '../data'
import './styles.css'
import { useState, useEffect, useTransition } from 'react'
import { useDeferredValue } from 'react'

function Index() {

  const [cartItems, setCartItems] = useState([])
  const { products } = data

  const addItem = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist) {
      const newCartItems = cartItems.map(x => 
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }]
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }

  const removeItem = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter(x => x.id !== product.id)
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = cartItems.map(x =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }

  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(() => 
      setCartItems(
        localStorage.getItem('cartItems') ?
          JSON.parse(localStorage.getItem('cartItems'))
          : []
      )
    )
  }, [])

  const cartItemsCount = useDeferredValue(cartItems.length)

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div>
        <Header countCartItems={cartItemsCount}/>
        <div className="row">
            <Main cartItems={cartItems} addItem={addItem} removeItem={removeItem} products={products} />
            <Basket cartItems={cartItems} addItem={addItem} removeItem={removeItem} />
        </div>
    </div>
  )
}

export default Index