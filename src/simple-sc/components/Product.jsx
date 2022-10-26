import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../actions'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GetSelectedProduct } from '../actions'


function Product() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { productId } = useParams()
    const { selectedProduct } = useSelector(state => state)
    
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const FetchProduct = async () => {
            let data = {}
            const res = await axios
                .get(`https://fakestoreapi.com/products/${productId}`)
                .catch(err => console.log(err))
            // data.push(res.data)
            data = res.data
            dispatch(GetSelectedProduct(data))
            setIsLoading(false)
            console.log(data)
        }
        
        if (selectedProduct === null) FetchProduct()

    }, [productId, dispatch, selectedProduct])

    return (
        <>
            <Navbar />
            <div className="product">
                {selectedProduct === null && isLoading ? (
                    <div style={{ textAlign: 'center' }}>
                        <h1>...Loading</h1>
                    </div>
                    ) : (
                    // <h1>Data has been fetched</h1>
                    <div className="container grid">
                        <div className="product-detail left">
                            <img style={{ width: "400px" }} src={selectedProduct.image} alt='' />
                        </div>
                        <div className="product-detail right">
                            <h5>Category : {selectedProduct.category}</h5>
                            <h1>{selectedProduct.title}</h1>
                            <p>{selectedProduct.description}</p>
                            <h4>Current Price: <span>$ {selectedProduct.price}</span></h4>
                            <button onClick={() => dispatch(AddToCart(selectedProduct.id))} type="button" className="btn dark">Add to Bag</button>
                            <button onClick={() => navigate('/react-shopping-cart')} type="button" className="btn" style={{ marginLeft: "5px" }}>Back to Shop</button>
                        </div>
                    </div>
                    )
                }
                </div>
            <Footer />
        </>
    )
}

export default Product