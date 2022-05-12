import React from 'react'
import './Form.css'

const Form = () => {
  return ( 
    <>
    <section className='form-component'>
      <div className='form--header'>Pedinos tu presupuesto</div>
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
    </section>
    </>
   );
}
 
export default Form;