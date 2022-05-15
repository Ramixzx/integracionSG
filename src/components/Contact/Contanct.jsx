import React from 'react';
import phoneIcon from '../../Assets/icons/icon-phone.svg'
import mailIcon from '../../Assets/icons/icon-mail.svg'
import clockIcon from '../../Assets/icons/icon-clock.svg'
import './Contact.css'

const Contact = () => {
  return ( 
    <>
      <section className='section-contact--container'>
        <div className='contanct--cards'>
          <img src={phoneIcon} alt="" />
          <p>
            <span>LLamanos</span>
            <span>910 059 888</span>
          </p>
        </div>
        <div className='contanct--cards'>
          <img src={mailIcon} alt="" />
          <p>
            <span>Escribinos</span>
            <span>hola@space.guru</span>
          </p>
        </div>
        <div className='contanct--cards'>
          <img src={clockIcon} alt="" />
          <p>
            <span>Horarios de atención</span>
            <span>Lun a Vie - 9 AM a 7PM <br />Sab 9 AM - 2 PM</span>
          </p>
        </div>
      </section>
    </>
   );
}
 
export default Contact;