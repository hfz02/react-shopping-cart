import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
        <section className="hero">
            <Navbar />
            <img src={require("./assets/mockup-white-wall-with-flower-vase-shelf3d-rendering.jpg")} alt="freepik - https://www.freepik.com/author/vanitjan1" />
            <div className="container grid">
                
                <div className="hero-text">
                    <h1>Lorem Ipsum Dolor</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Dignissimos eius, maxime fugiat dolore doloremque harum, delectus, 
                    sint hic a nostrum neque officiis! Natus quo soluta facere ea quisquam. 
                    Iamet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
  )
}

export default Hero