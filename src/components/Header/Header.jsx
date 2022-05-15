import React from 'react';
import logoHeader from '../../Assets/images/logo-header.png'
import phoneHeader from '../../Assets/icons/icon-phone-header.svg'
import phoneRinging from '../../Assets/icons/icon-phone-ringing.svg'
import './Header.css'

const Header = () => {
  return ( 
    <>
      <header className='header-container'>
        <img className='header-logo' src={logoHeader} alt="Logo SpaceGuru" />
        <img className='header-phone--icon' src={phoneHeader} alt="Phone" />
        <div className='header-phone--icon_desktop'>
          <img src={phoneRinging} alt="Phone number" />
          <p>910 000 445</p>
        </div>
      </header>
    </>
   );
}
 
export default Header;