import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const { cart } = useSelector(state => state)
  const [navbar, setNavbar] = useState(false)
  const [toggle, setToggle] = useState(false)

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 70) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
  }

  const handleToggle = () => {
      setToggle(prev => !prev)
    //   console.log(toggle)
  }
  
  useEffect(() => {
    //   console.log(window.screen.width)
      window.addEventListener('scroll', changeBackground)
      return () => {
        window.removeEventListener('scroll', changeBackground);
      }
  }, [])

  return (
    <>
        <div className={navbar ? "navbar scroll-active" : "navbar"}>
            <div className="container flex">
                <h1>Fake Distro.</h1>
                <div>
                    <button onClick={handleToggle} className="burger" style={toggle ? { color: "#fff"} : { color: "#222"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className={toggle ? "sidebar-active" : "sidebar"}>
            <div>
                <button onClick={handleToggle} className="burger" style={toggle ? { color: "#fff"} : { color: "#222"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                        />
                    </svg>
                </button>
            </div>
            <Link to={`/`}>
                Home
            </Link>
            <Link to={`/cart`}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="1em" 
                height="1em"
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 20 20"
            >
                <path 
                    fill="currentColor" 
                    fillRule="evenodd" 
                    d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19h12.32a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" 
                    clipRule="evenodd"
                />
            </svg> Shopping Bag ({cart.length})
            </Link>
        </div>
    </>
  )
}

export default Navbar
