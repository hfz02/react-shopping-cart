import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../actions'
// import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { RemoveSelectedProduct } from '../actions'

function Product() {
    const dispatch = useDispatch()
    const { selectedProduct } = useSelector(state => state.cart.cart)
    const { id, title, price, description, category, image } = selectedProduct
    // const { productId } = useParams()
    
    // useEffect(() => {
    //     if (productId === undefined) {
    //         return dispatch(RemoveSelectedProduct())
    //     }
    // })

    return (
        <>
            <Navbar />
            <div className="ui grid container">
                {Object.keys(selectedProduct).length === 0 ? (
                <div>...Loading</div>
                ) : (
                <div className="container">
                    <div className="card">
                    <div className="container-fluid">

                        <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1"><img style={{ width: "400px" }} src={image} alt='' /></div>
                            </div>
                        </div>
                        <div className="details col-md-6">
                            <h5 className="sizes">Category :
                            <span className="size" data-toggle="tooltip" title="small">{category}</span>
                            </h5>
                            <h3 className="product-title">{title}</h3>
                            <p className="product-description">{description}</p>
                            <h4>Current Price: <span>$ {price}</span></h4>
                            <div className="action">
                            <button onClick={() => dispatch(AddToCart(id))} type="button" className="btn btn-primary flex-fill ms-1 mt-2 h-100 w-100">Add to Cart</button>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>
                </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Product

//  <button onClick={() => addToCart(productId)} type="button" className="btn btn-primary flex-fill ms-1 mt-2 h-100 w-100">Add to Cart</button> 