import React from 'react';
import PayToSaveImage from '../../Assets/images/PagasXGuardar.png'
import './PayToSave.css'

const PayToSave = () => {
  return ( 
    <>
      <section className='payToSave-container'>
        <img  className='payToSave--image' src={PayToSaveImage} alt="" />
        <h2 className='payToSave--title'>Pagás por lo que guardás</h2>
        <p className='payToSave--p'>Por los exactos metros cúbicos que ocupan tus objetos.</p>
      </section>
    </>
   );
}
 
export default PayToSave;