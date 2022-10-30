import { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { 
    IncreaseQuantity, 
    DecreaseQuantity, 
    DeleteItem, 
    RemoveSelectedProduct, 
    CreateOrder, 
    DeleteCart
} from '../redux/actions'

function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const date = new Date()
    const { productId } = useParams()
    const { cart, selectedProduct } = useSelector(state => state)

    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [payment, setPayment] = useState("")

    // cart === null

    const validateForm = e => {
        e.preventDefault()
        if (payment === "" || email === "" || name === "" || address === "") {
            alert("All form must be filled out.")
        } else {
            alert("Form filled successfully!")
            createOrder()
        }
    } 

    const handlePayment = e => {
        setPayment(e.target.value)
    }

    const createOrder = () => {
        let order = {
            id: Math.floor(Math.random() * 1000000000000 + 1),
            email: email,
            name: name,
            address: address,
            paymentMethods: payment,
            totalItems: `${cart.length} items`,
            total: `$${totalPrice}`,
            time: date.toLocaleTimeString() + ' - ' + date.toLocaleDateString(),
        }
        dispatch(CreateOrder(order))
    }

    useEffect(() => {
        // console.log(cart)
        let items = 0
        let price = 0

        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        })

        setTotalPrice(price.toFixed(2))
        setTotalItems(items)

        if (productId === undefined && selectedProduct !== null) dispatch(RemoveSelectedProduct())

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems, dispatch, productId, selectedProduct, payment])


  return (
    <>  
        <Navbar />

        <section className="cart">
            <div className="container grid">

                <div className="cart-title">
                    <h1 className="text-center">Shopping Cart</h1>
                    <hr />
                </div>


                {/* Product */}
                <div className="cart-column">
                    {cart.map(item => (
                        <div key={item.id}>
                            <div className="cart-item">
                                <div className="image col1">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="col2">
                                    <div>
                                        <h5 style={{fontWeight: "lighter"}}>{item.category}</h5>
                                    </div>
                                    <div>
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                                <div className="col3">
                                    <div>
                                        <button className="btn btn-b" onClick={() => dispatch(DecreaseQuantity(item.id))}>
                                            -
                                        </button>
                                        <button className="btn btn-qty">
                                            <h5>{item.qty}</h5>
                                        </button>
                                        <button className="btn btn-b" onClick={() => dispatch(IncreaseQuantity(item.id))}>
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="col4">
                                    <h3>
                                        ${item.price * item.qty}
                                    </h3>
                                    <div style={{ width: "10vh" }}>
                                        <div>
                                            <button className="btn" onClick={() => dispatch(DeleteItem(item.id))}>
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    preserveAspectRatio="xMidYMid meet" 
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path 
                                                        fill="currentColor" 
                                                        fillRule="evenodd" 
                                                        d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" 
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ marginBottom: "1em" }} />
                        </div>
                    ))}

                    <div className="back-btn" style={{ width: "22%" }}>
                        <Link to={`/`}>
                            <div className="back">
                                <div>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        preserveAspectRatio="xMidYMid meet" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="1.5" 
                                            d="M10.25 3.75L5.75 8l4.5 4.25"
                                        />
                                    </svg>
                                </div>
                                <div style={{ padding: "0 10px" }}>
                                    <h3>Back to Shop</h3>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
                {/* Product */}

                {/* Summary */}

                <div className="precheckout">

                    <div className="summary">
                        <div className="summary-row">
                            <h2 style={{ fontSize: "4.5vh", paddingTop: "11%" }}>Summary</h2>
                            <h5 style={{ color: "rgb(100, 100, 100)", paddingTop: "25px" }}>Subtotal : $ {totalPrice} </h5>
                            <h5 style={{ color: "rgb(100, 100, 100)" }}>Shipping : Free</h5>
                            <hr />
                            <h3>Total : $ {totalPrice}</h3>
                            <div>
                            </div>
                        </div>
                    </div>

                    <div className="payment">
                        <div className="payment-row">
                            <h2 style={{ fontSize: "4.5vh" }}>Payment</h2>
                            <h4>Payment methods: </h4>
                            
                            <form name="form" className="form" onSubmit={validateForm}>
                                <div className="methods">
                                    <div>
                                        <input type="radio" name="payment" value="Gopay" onChange={handlePayment} />
                                        <h4>Gopay</h4>
                                    </div>
                                    <div>
                                        <input type="radio" name="payment" value="ShopeePay" onChange={handlePayment} />
                                        <h4>ShopeePay</h4>
                                    </div>
                                    <div>
                                        <input type="radio" name="payment" value="Bank Transfer" onChange={handlePayment} />
                                        <h4>Bank Transfer</h4>
                                    </div>
                                </div>

                                <div className="input">
                                    <div>
                                        <h4>Email</h4>
                                        <div>
                                            <input name="email" type="email" onChange={e => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Name</h4>
                                        <div>
                                            <input name="name" type="text" onChange={e => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Address</h4>
                                        <div className="addr">
                                            <textarea name="address" rows="6" onChange={e => setAddress(e.target.value)} />
                                        </div>
                                    </div>
                                    <button 
                                        type="submit"
                                        className="btn dark"
                                        onClick={() => {
                                            if (payment === "" || email === "" || name === "" || address === "") {
                                                return
                                            }
                                            setTimeout(() => {
                                                dispatch(DeleteCart())
                                                navigate("/checkout")
                                            }, 1000)
                                        }}
                                    >Checkout</button>
                                    {/* {email + name + address} */}
                                </div>
                            </form>

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