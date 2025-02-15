import React from 'react'
import '../../styles/Home.css'
import AstroImg from '../../assets/Hero_section/fluppyhero.png'
// import AstroImg from '../../assets/Hero_section/hero_astranaut_.png'
// import Elipse from '../../assets/Hero_section/orbit_elipse.png'
function Home() {
  // {{height:"100vh",background:"blue", backgroundImage:`url(${uranusPath})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}
  return (
    <section className='hero_section' id='home' >
        <div className="heading">
          <h1 className='goldman_regular'>
          Discover the Galactic Potential of Fluppy Coin
          </h1>
          <p> FLUPY Layer 2 is an innovative solution designed to transform the Solana network, addressing the challenges of scalability, social inclusion, and cultural impact. It combines cutting-edge technology with an inclusive movement, promoting accessibility, innovation, and community engagement. </p>
          <div className='btn'><span>Buy Now</span></div>
        </div>
        <div className="astro">
          <img src={AstroImg} loading='lazy' className="rocket" alt="AstroImg" />
          
          
        </div>
        

        
    </section>
  )
}

export default Home