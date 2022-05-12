import React from 'react'
import imageHeader from '../../Assets/images/images-header.png'
import './Hero.css'

const Hero = () => {
  return ( 
    <>
    <section className='hero-container'>
      <h1 className='hero--title'>Más que un alquiler de trastero, tu guardado online</h1>
      <p className='hero--paragraph'>Gestioná online el retiro, guardado y devolución de tus objetos</p>
      <img className='hero--image' src={imageHeader} alt="Aplicacion mobile, transporte propio y empaquetamiento personalizado" />
      <button className='hero--button'>Cotizar</button>
    </section>
    </>
   );
}
 
export default Hero;
