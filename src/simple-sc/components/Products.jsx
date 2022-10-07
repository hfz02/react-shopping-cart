import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { GetAllProducts, GetSelectedProduct, RemoveSelectedProduct } from '../actions'

function Products() {
    const dispatch = useDispatch()
    const { _products } = useSelector(state => state.cart.cart)
    const { selectedProduct } = useSelector(state => state.cart.cart)
    const { productId } = useParams()
    console.log(selectedProduct)
    // console.log(useSelector(state => console.log(state.cart)))
    
    useEffect(() => {
        const FetchProducts = async () => {
            const res = await axios
            .get("https://fakestoreapi.com/products")
            .catch(err => console.log(err))
            dispatch(GetAllProducts(res.data))
        }

        // FetchProducts()
        if (productId === undefined && selectedProduct !== null) {
            dispatch(RemoveSelectedProduct())
            FetchProducts()
        } else {
            FetchProducts()
        }

    }, [dispatch, productId, selectedProduct])
    
                
    return (
        <>
            <Navbar />
            <Hero />
            
            {/* Card */}
                <div className="ui grid container" >
                    {_products.map(_product => (
                        <div className="four wide column" key={_product.id}>
                                <div className="ui link cards">
                                    <div className="card">
                                        <div className="image">
                                            <img src={_product.image} alt={_product.title} />
                                        </div>
                                        <div className="content">
                                            <div className="meta">{_product.category}</div>
                                            <div className="header">{_product.title}</div>
                                            <div className="meta price">$ {_product.price.toFixed(2)}</div>
                                            <Link to={`/react-shopping-cart/product/${_product.id}`}>
                                                <button onClick={() => dispatch(GetSelectedProduct(_product))} type="button" className="btn btn-primary">View detail</button>
                                                {/* <button onClick={() => dispatch(AddToCart(_product.id))} type="button" className="btn btn-primary">Add to cart</button> */}
                                                {/* <button onClick={() => dispatch(GetSelectedProduct(_product))} type="button" className="btn btn-primary">View detail</button> */}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))}
            </div>
            {/* Card */}

            <Footer />
        </>
    )
}

export default Products