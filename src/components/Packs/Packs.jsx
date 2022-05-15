import React from 'react';
import imageWinterSports from '../../Assets/images/winter-sports.svg'
import './Packs.css'

const Packs = () => {
  return ( 
    <>
      <section className='packs-container'>
        <h2 className='packs--title'>Packs orientativos</h2>
        <p className='packs--p'>Te brindamos unos packs de acuerdoa las necesidades de nuestros clientes</p>
        <article className='packs--cards'>
          <img className='packs--cards-img' src={imageWinterSports} alt="" />
          <h4 className='packs--cards-title'>Deportes de invierno</h4>
          <ul className='packs--cards-list'>
            <li className='packs--cards-list_item'>Sofá de 2 cuerpos</li>
            <li className='packs--cards-list_item'>Bicicleta</li>
            <li className='packs--cards-list_item'>Mesa ratona</li>
            <li className='packs--cards-list_item'>2 Cajas</li>
          </ul>
          <span className='packs--cards-price'>$400</span>
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
 
export default Packs;