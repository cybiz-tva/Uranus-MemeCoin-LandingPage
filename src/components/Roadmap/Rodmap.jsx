import React from 'react'
import '../../styles/Roadmap.css'

import TimeLine from './TimeLine'
function Rodmap() {
  return (
    <div className='roadmap_section' id='roadmap'>
        <h1 className=" goldman_regular">Roadmap</h1>

        <div>
        <div style={{zIndex:"-20", top:"5px"}} className='gradient_boll_cyan'></div>



            <div className="timeline_container" style={{display:"flex", alignItems:"center",justifyContent:"center", flexWrap:"wrap", gap:"2rem", marginTop: "4rem"}}>
                <TimeLine no={1} para={"Launch pre-sale in three phases, including staking. | Initial community building and social engagement. "} heading={" Phase 1 (0-8 months): "}/>
                <TimeLine no={2} para={"Token Generation Event (TGE) and listing on DEX and CEX. | Initial implementation of FlupyCore and FlupyDEX Turbo. "} heading={"Phase 2 (8-14 months):"}/>
                <TimeLine no={3} para={" Multi-chain integrations with Ethereum, BNB Chain, and Polygon. | Expansion of features like FlupyNFT Hub, FlupyGames, FlupyImpact, and FlupyEdu. "} heading={"Phase 3 (14-26 months):"}/>
                <TimeLine no={4} para={"Annual social and environmental impact reports. | Ecosystem expansion, support for custom dApps, and new strategic partnerships. "} heading={"Phase 4 (26+ months):"}/>
                <TimeLine no={5} para={"Full decentralization of Flupy ecosystem governance through DAO implementation."} heading={"Phase 5 (9+ months) :"}/>
                <div style={{zIndex:"-20", top:"400px"}} className='gradient_boll_orange' ></div>
            </div>




        </div>
    </div>
  )
}

export default Rodmap