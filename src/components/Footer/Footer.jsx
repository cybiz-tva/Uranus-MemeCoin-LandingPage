import React from 'react'
import '../../styles/Footer.css'

import Logo from '../../assets/Hero_section/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoReddit } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";




function Footer() {
  return (
    <>
        <footer className='footer_section'>
          <div className="logo_socials">

            <div className="lgog_box">
                <img loading='lazy' src={Logo} alt="logopng" />
                <h3 className="goldman_regular logo" style={{fontSize:"2.4rem"}} >
                    FLUPPY
                </h3>
            </div>
            <div className="social_icons">
            
                <li><a target="_blank" href=""><FaXTwitter/></a></li>
                <li><a target="_blank" href=""><FaFacebookF/></a></li>
                <li><a target="_blank" href=""><FaTelegramPlane/></a></li>
                <li><a target="_blank" href=""><SiDiscord/></a></li>

            </div>
          </div>
          <div className="part_res">
            <div>
              <h2>Partner</h2>
              <ul>
                <a target="_blank" href="https://icchatva.com/">Icchatva</a>
                <a target="_blank" href="">Partner 2</a>
                <a target="_blank" href="">Partner 3</a>
              </ul>
            </div>
            <div>
              <h2>Resource</h2>
              <ul>
                <a target="_blank" href="">Privacy Policy</a>
                <a target="_blank" href="">Terms and conditions</a>
                
              </ul>
            </div>

          </div>
        </footer>

    </>
  )
}

export default Footer