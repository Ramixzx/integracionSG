import React from 'react';
import logoFooter from '../../Assets/images/logo-footer.svg'
import './Footer.css'

const Footer = () => {
  return ( 
    <>
      <footer className='footer-container'>
        <img src={logoFooter} alt="Logo SpaceGuru 2022" />
      </footer>
    </>
   );
}
 
export default Footer;