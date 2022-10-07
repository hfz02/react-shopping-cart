import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IncreaseQuantity, DecreaseQuantity, DeleteCart, RemoveSelectedProduct } from '../actions'

function Cart() {
    const dispatch = useDispatch()
    const { cart } = useSelector(store => store.cart.cart)
    const { productId } = useParams()
    const { selectedProduct } = useSelector(state => state.cart.cart)
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let items = 0
        let price = 0

        cart.forEach(item => {
            console.log(item)
            items += item.qty
            price += item.qty * item.price
        })

        setTotalPrice(price.toFixed(2))
        setTotalItems(items)

        if (productId === undefined && selectedProduct !== null) {
            dispatch(RemoveSelectedProduct())
        }

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems, dispatch, productId, selectedProduct])


  return (
    <>  
        <Navbar />

        <section className="h-100 h-custom" style={{backgroundColor: "#d2c9ff"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">

                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                <h6 className="mb-0 text-muted">{cart.length} items</h6>
                                            </div>
                                            
                                            <hr className="my-4" />

                                            {/* Product */}
                                            {cart.map(item => (
                                                <>
                                                    <div key={item.id} className="row mb-4 d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img
                                                                src={item.image}
                                                                className="img-fluid rounded-3" 
                                                                alt="Cotton T-shirt"
                                                            />
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">{item.category}</h6>
                                                            <h6 className="text-black mb-0">{item.title}</h6>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                            {/* <input id="form1" min="0" name="quantity" type="text" className="form-control form-control-sm" /> */}
                                                            <button onClick={() => dispatch(DecreaseQuantity(item.id))}>-</button>
                                                            <h5>{item.qty}</h5>
                                                            <button onClick={() => dispatch(IncreaseQuantity(item.id))}>+</button>
                                                        </div>
                                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                            <h6 className="mb-0">${item.price}</h6>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <button onClick={() => dispatch(DeleteCart(item.id))}>x</button>
                                                            {/* <a href="#/" className="text-muted"><i className="fas fa-times"></i></a> */}
                                                        </div>
                                                    </div>
                                                    <hr className="my-4" />
                                                </>
                                            ))}
                                            {/* Product */}


                                            <Link to={`/react-shopping-cart`}>
                                                <div className="pt-5">
                                                    <h6 className="mb-0"><a href="#!" className="text-body">
                                                        <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a>
                                                    </h6>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                    
                                    {/* Summary */}
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                            <hr className="my-4" />

                                            {cart.map(item => (    
                                                <div key={item.id} className="d-flex justify-content-between mb-4">
                                                    <h5>{item.title}</h5>
                                                    <h5>$ {item.price} x {item.qty}</h5>
                                                </div>
                                            ))}
                                            <hr className="my-4" />
                                            <div className="d-flex justify-content-between mb-5">
                                                <h5>Total: {totalItems} items</h5>
                                                <h5>$ {totalPrice}</h5>
                                            </div>

                                            <hr />

                                            <div className="mb-3">
                                                <h5 className="mb-3">Email</h5>
                                                <div className="form-outline">
                                                <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <h5 className="mb-3">Name</h5>
                                                <div className="form-outline">
                                                <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <h5 className="mb-3">Address</h5>
                                                <div className="form-outline">
                                                <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <button 
                                                type="button"
                                                className="btn btn-dark btn-block btn-lg"
                                                data-mdb-ripple-color="dark"
                                            >Checkout</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </>
  )
}

export default Cart