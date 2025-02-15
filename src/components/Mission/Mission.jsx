import React from 'react'
import MissionCoin from '../../assets/Mission/fluppy.png'
import '../../styles/Mission.css'

function Mission() {
  return (
    <div className='mission_section'>
        <div className='whatisuranus '>
            <h1 className='goldman_regular'>How we are different?</h1>
            <div className="text_coin">
                <img src={MissionCoin} loading='lazy' className='memecoin' alt="MemeCoin" />
                <p>
                
                FLUPPY Layer 2 is not just a
technical solution—its a
movement to democratize access
to the blockchain. Our key
differentiators include:
🚀 Extreme scalability: Instant
transactions and near-zero fees
🔗 True interoperability: Seamless
connection with Ethereum, BNB
Chain and Polygon
🛠 Modular architecture:
Flexibility for different use cases
🌍 Digital inclusion: Incentives for
large-scale adoption, blockchain
education and social projects
While other Layer 2 solutions
focus only on technical
performance, FLUPPY goes
beyond that, creating an
accessible and sustainable
ecosystem for everyone.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Mission