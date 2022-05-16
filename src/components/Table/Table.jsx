import React from 'react'
import spaceGuruIcon from '../../Assets/icons/icon-spaceguru-table.svg'
import anotherBoxIcon from '../../Assets/icons/icon-another-box.svg'
import deniedIcon from '../../Assets/icons/icon-denied.svg'
import './Table.css'

const Table = () => {
  return ( 
    <>
      <section className='section-table--container'> 
        <h2 className='table--title'>¿Por qué elegirnos?</h2>
        <div className='table--container'>
            <div></div>
            <div><img src={spaceGuruIcon} alt="Columna Space Guru" /></div>
            <div><img src={anotherBoxIcon} alt="Columna otros trasteros" /></div>
            <div className='firstItemList'>Servicio de recogida</div>
            <div>¡Gratis!</div>
            <img src={deniedIcon} alt="Icono de denegado" />
            <div className='firstItemList item--list_background'>Catálogo online</div>
            <div className='item--list_background'>¡Gratis!</div>
            <div className='item--list_background'><img src={deniedIcon} alt="" /></div>
            <div className='firstItemList'>Precios que pagas</div>
            <div>Por tus objetos</div>
            <div>Trastero entero</div>
            <div className='firstItemList item--list_background'>Espacio disponible</div>
            <div className='item--list_background'>Siempre</div>
            <div className='item--list_background'>Fijos <br />2,6,12 m</div>
            <div className='firstItemList'>Precio m³</div>
            <div>¡Gratis!</div>
            <div><img src={deniedIcon} alt="Icono de denegado" /></div>
            <div className='firstItemList item--list_background'>Embalaje clásico</div>
            <div className='item--list_background'>¡Gratis!</div>
            <div className='item--list_background'><img src={deniedIcon} alt="" /></div>
            <div className='firstItemList'>Subida y bajada por escaleras</div>
            <div>¡Lo hacemos por ti!</div>
            <div><img src={deniedIcon} alt="Icono de denegado" /></div>
        </div>
      </section>
    </>
   );
}
 
export default Table;