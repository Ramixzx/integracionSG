import React from 'react';
import RememberImage from '../../Assets/images/RecordarFacilmente.png'
import './Remember.css'

const Remember = () => {
  return ( 
    <>
      <section className='remember--container'>
        <img  className='remember--image' src={RememberImage} alt="" />
        <div className='remember--text'>
          <h2 className='remember--title'>Puedes recordar fácilmente lo que has guardado</h2>
          <p className='remember--p'>Con tu catálogo online puedes acceder a qué cosas has guardado, estadísticas de hace cuánto las guardas y puedes organizar tus objetos desde tu propio hogar.</p>
        </div>
      </section>
    </>
   );
}
 
export default Remember;