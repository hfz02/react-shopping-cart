import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Footer() {
  const { cart } = useSelector(state => state)

  return (
    <footer className="footer py-5">
      <div className="container flex">
          <div>
            <p>&copy; 2022 Fake Distro, All rights reserved</p>
          </div>
          <ul>
            <Link to={`/react-shopping-cart`}>
              <li>Home</li>
            </Link>
            <Link to={`/react-shopping-cart/cart`}>
              <li>Shopping Bag ({cart.length})</li>
            </Link>
          </ul>
      </div>
    </footer>
  )
}

export default Footer