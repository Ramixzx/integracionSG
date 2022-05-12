import React from 'react';
import logoSpaceGuru from '../../Assets/images/logo-header.png'
import './Header.css'

const Header = () => {
  return ( 
    <>
      <header className='header-container'>
        <img className='header-logo' src={logoSpaceGuru} alt="Logo SpaceGuru" />
      </header>
    </>
   );
}
 
export default Header;