import React from 'react';
import PayToSaveImage from '../../Assets/images/PagasXGuardar.png'
import './PayToSave.css'

const PayToSave = () => {
  return ( 
    <>
      <section className='payToSave-container'>
        <img  className='payToSave--image' src={PayToSaveImage} alt="" />
        <div className='payToSave-text'>
          <h2 className='payToSave--title'>Pagás por lo que guardás</h2>
          <p className='payToSave--p'>Por los exactos metros cúbicos que ocupan tus objetos.</p>
        </div>
      </section>
    </>
   );
}
 
export default PayToSave;