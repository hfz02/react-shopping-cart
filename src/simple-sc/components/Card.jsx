import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ClearOrder } from '../actions'


function Products() {
    const dispatch = useDispatch()
    const { order } = useSelector(state => state)
    const navigate = useNavigate()
    
                
    return (
        <>
            <div style={{ marginTop: '10vh', textAlign: "center" }}>
                <h5>Id: {order.id}</h5>
                <h5>Email: {order.email}</h5>
                <h5>Name: {order.name}</h5>
                <h5>Address: {order.address}</h5>
                <h5>Payment Methods: {order.paymentMethods}</h5>
                <h5>Items: {order.totalItems}</h5>
                <h5>Total: {order.total}</h5>
                <h5>Time: {order.time}</h5>
                <button 
                
                    type="submit"
                    className="btn dark"
                    onClick={() => 
                        setTimeout(() => {
                            dispatch(ClearOrder())
                            return navigate('/react-shopping-cart')
                        }, 500) 
                    }
                >Clear Order</button>
            </div>
        </>
    )
}

export default Products