import React from 'react'
import FromHomeImage from '../../Assets/images/sin_salir_de_tu_casa.png'
import './FromHome.css'

const FromHome = () => {
  return ( 
    <>
      <section className='fromHome-container'>
        <img  className='fromHome--image' src={FromHomeImage} alt="" />
        <h2 className='fromHome--title'>Sin salir de tu casa <br></br>¡y sin hacer esfuerzo!</h2>
        <p className='fromHome--p'>Recogemos, guardamos, digitalizamos y devolvemos tus objetos cuando quieras.</p>
      </section>
    </>
   );
}
 
export default FromHome;