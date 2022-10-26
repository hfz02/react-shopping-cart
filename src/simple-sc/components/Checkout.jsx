import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { ClearOrder } from '../actions'


function Products() {
    const dispatch = useDispatch()
    const { order } = useSelector(state => state)
    const navigate = useNavigate()
    // console.log(order)
    
                
    return order !== null ?
        <div className="checkout">
            <div className="container">
                <table align="left" style={{width: "100%"}}>
                    <tr>
                        <th>Id: </th>
                        <td>{order.id}</td>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td>{order.email}</td>
                    </tr>
                    <tr>
                        <th>Name:</th>
                        <td>{order.name}</td>
                    </tr>
                    <tr>
                        <th>Address:</th>
                        <td>{order.address}</td>
                    </tr>
                    <tr>
                        <th>Payment Methods:</th>
                        <td>{order.paymentMethods}</td>
                    </tr>
                    {/* <tr>
                        <th>Items:</th>
                        <td>{order.item}</td>
                    </tr> */}
                    <tr>
                        <th>Total Items:</th>
                        <td>{order.totalItems}</td>
                    </tr>
                    <tr>
                        <th>Total:</th>
                        <td>{order.total}</td>
                    </tr>
                    <tr>
                        <th>Time:</th>
                        <td>{order.time}</td>
                    </tr>
                </table>
                <button 
                    type="submit"
                    className="btn dark"
                    onClick={() => 
                        setTimeout(() => {
                            dispatch(ClearOrder())
                            return navigate('/react-shopping-cart')
                        }, 80) 
                    }
                >  
                    <div className="back">
                        <div style={{ transform: "translateX(-35%)" }}>
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
                        <div>
                            <h3>Back to Shop</h3>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        :
        <Navigate to="/react-shopping-cart" replace={true} />
}

export default Products