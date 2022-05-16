import React from 'react';
import logoFooter from '../../Assets/images/logo-complete-F.svg'
import logoTextFooter from '../../Assets/images/propSG.svg'
import './Footer.css'

const Footer = () => {
  return ( 
    <>
      <footer className='footer-container'>
        <img src={logoFooter} alt="Logo SpaceGuru 2022" />
        <img src={logoTextFooter} alt="Logo SpaceGuru 2022" />
      </footer>
    </>
   );
}
 
export default Footer;