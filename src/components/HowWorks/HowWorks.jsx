import React from 'react'
import CotizaTuGuardado from '../../Assets/images/CotizaTuGuardado.png'
import './HowWorks.css'

const HowWorks = () => {
  return ( 
    <>
      <section className='howWorks-container--slider'>
        <h2 className='howWorks-title'>¿Cómo funciona?</h2>
        <article className='howWorks-card'>
          <img className='how-card--image' src={CotizaTuGuardado} alt="" />
          <div>
            <h4 className='how-card--title'>Cotiza tu guardado</h4>
            <p className='how-card--p'>Un precio en base a tus objetos</p>
          </div>
        </article>
        <div className='slider-control'>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </section>
    </>
   );
}
 
export default HowWorks;