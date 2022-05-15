import React from 'react'
import imageFormSection from '../../Assets/images/image-form-section.svg'
import './Form.css'

const Form = () => {
  return ( 
    <>
    <section className='section-form--container'>
      <img className='section--image' src={imageFormSection} alt="Una persona observando que objetos guardar en su baulera" />
      <div className='formxd'>
        <h3 className='form--header'>Pedinos tu presupuesto</h3>
        <form className='form--content'>
          <div>
            <label className='form--label' htmlFor="inputName">TU NOMBRE</label>
            <input className='form--input' type="text" id='inputName' placeholder='Ej. Maria'/>
          </div>
          <div>
            <label className='form--label' htmlFor="inputSurname">TU APELLIDO</label>
            <input className='form--input' type="text" id='inputSurname' placeholder='Ej. Gonzalez'/>
          </div>
          <div>
            <label className='form--label' htmlFor="inputMail">TU MAIL</label>
            <input className='form--input' type='email' id='inputMail' placeholder='Ej. Maria'/>
          </div>
          <div>
            <label className='form--label' htmlFor="inputWhatsapp">WHATSAPP</label>
            <input className='form--input' type='number' id='inputWatsapp' placeholder='Ej. 123 456 789'/>
          </div>
          <button className='form--button'>Enviar</button>
        </form>
      </div>
    </section>
    </>
   );
}
 
export default Form;