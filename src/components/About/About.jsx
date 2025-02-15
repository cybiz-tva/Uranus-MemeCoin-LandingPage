import React from 'react'
import '../../styles/About.css'
import Binance from '../../assets/About/binance.png'
import Coinbase from '../../assets/About/coinbase.png'
import Gate from '../../assets/About/gate.png'
import Hotbit from '../../assets/About/hotbit.png'
import Gecko from '../../assets/About/gecko.png'
import MemeCoin from '../../assets/About/meme_coin1.png'
import Loopers from '../../assets/About/Loopers.png';

function About() {
  return (
    <div className='aboutus_section' id='about'>
        <h1 className='goldman_regular'>Our Trusted Partners</h1>
        <div className='partners'>
            {/* <div className="inner"> */}
                <img loading='lazy' style={{scale:"1.4"}}   src={Binance} alt="okok" />
                <img loading='lazy' style={{padding:"1rem", marginBottom:"2px", marginLeft:"10px"}}  src={Coinbase} alt="okok" />
                <img loading='lazy'  src={Gate} alt="okok" />
                <img loading='lazy'  src={Hotbit} alt="okok" />
                <img loading='lazy'  src={Gecko} alt="okok" />
            {/* </div> */}

        </div>

        <div className='gradient_blue'></div>
        <div className='whatisuranus '>
            <h1 className='goldman_regular'>What is FLUPPY Layer 2</h1>
            <div className="text_coin">
                <p>
                Unveiling the potential of FLUPPY COIN <br />
                FLUPPY Layer 2 is a revolutionary
scalability solution for the Solana
blockchain. Our technology
combines zk-Rollups and
Optimistic Rollups, ultra-fast off-
chain processing, and an
advanced modular architecture
to eliminate congestion, reduce
fees to near zero, and enable
instant transactions, even in
times of high demand.  In addition to its extreme
scalability, FLUPPY Layer 2
provides full interoperability
with Ethereum, BNB Chain, and
Polygon, allowing developers and
users to move between networks
seamlessly and frictionlessly.
Designed to be fast, secure, and
accessible, FLUPPY redefines the
blockchain experience and
expands its potential for
everyone.
                </p>
                <img src={MemeCoin} loading='lazy' className='memecoin' alt="MemeCoin" />
                <img src={Loopers} loading='lazy' alt="" className="loopers" />
            </div>
        </div>

        

        
        
    </div>
  )
}

export default About