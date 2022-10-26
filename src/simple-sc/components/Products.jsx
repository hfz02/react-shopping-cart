import axios from "axios"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { AddToCart, GetAllProducts, GetSelectedProduct, RemoveSelectedProduct } from '../actions'


function Products() {
    const dispatch = useDispatch()
    const { _products, selectedProduct } = useSelector(state => state)
    const { productId } = useParams()

    useEffect(() => {
        const FetchProducts = async () => {
            const res = await axios
                .get("https://fakestoreapi.com/products")
                .catch(err => console.log(err))
            dispatch(GetAllProducts(res.data))
        }
        
        if (productId === undefined && selectedProduct !== []) {
            dispatch(RemoveSelectedProduct())
            FetchProducts()
        } else {
            FetchProducts()
        }
            
    }, [dispatch, productId, selectedProduct])
    
                
    return (
        <section id="products" className="products">
            <h1 className="text-center">Our Products</h1>
            <div className="container flex">
                {_products.map(_product => {
                    if (_product.category === "men's clothing" || _product.category === "women's clothing") return (
                        <div key={_product.id}>
                            <div className="ui cards">
                                <div className="card">
                                    <div className="image">
                                        <img src={_product.image} alt={_product.title} />
                                    </div>
                                    <div className="content">
                                        <div className="header">{_product.title}</div>
                                        <div style={{ marginBottom: "10px" }}>$ {_product.price.toFixed(2)}</div>
                                        <button onClick={() => dispatch(AddToCart(_product.id))} className="btn dark">Add to Bag</button>
                                        <Link to={`/react-shopping-cart/product/${_product.id}`}>
                                            <button 
                                            onClick={() => dispatch(GetSelectedProduct(_product))} 
                                            className="btn">View detail</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    return ''
                })}
            </div>
        </section>
    )
}

export default Products