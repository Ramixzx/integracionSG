import React from 'react';
import LightbulbIcon from '../../Assets/icons/icon-lightbulb.svg'
import IconPlus from '../../Assets/icons/icon-plus.svg'
import './Questions.css'

const Questions = () => {
  return ( 
    <>
    <section className='section-questions--container'>
      <h2 className='questions--title'>Preguntas frecuentes</h2>
      <div className='cards--container'>
        <div className='question--cards'>
          <img className='question--cards_lightbulb' src={LightbulbIcon} alt="Icon lightbulb" />
          <p>¿Qué hace Space Guru?</p>
          <span><img src={IconPlus} alt="See more" /></span>
        </div>
        <div className='question--cards'>
          <img className='question--cards_lightbulb' src={LightbulbIcon} alt="Icon lightbulb" />
          <p>¿Cuánto cuesta?</p>
          <span><img src={IconPlus} alt="See more" /></span>
        </div>
        <div className='question--cards'>
          <img className='question--cards_lightbulb' src={LightbulbIcon} alt="Icon lightbulb" />
          <p>¿Cómo funciona?</p>
          <span><img src={IconPlus} alt="See more" /></span>
        </div>
        <div className='question--cards'>
          <img className='question--cards_lightbulb' src={LightbulbIcon} alt="Icon lightbulb" />
          <p>¿Por qué me conviene?</p>
          <span><img src={IconPlus} alt="See more" /></span>
        </div>
        <div className='question--cards'>
          <img className='question--cards_lightbulb' src={LightbulbIcon} alt="Icon lightbulb" />
          <p>¿Qué puedo guardar?</p>
          <span><img src={IconPlus} alt="See more" /></span>
        </div>
        <div className='question--cards'>
          <img className='question--cards_lightbulb' src={LightbulbIcon} alt="Icon lightbulb" />
          <p>¿Dónde se encuentran?</p>
          <span><img src={IconPlus} alt="See more" /></span>
        </div>
      </div>
    </section>
    </>
   );
}
 
export default Questions;