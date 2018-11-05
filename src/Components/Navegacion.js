import React from 'react'
import './Navegacion.css'
import {Link} from 'react-router-dom'

const Navegacion = () => {
  return (
    <div className="navegacion">
      <Link to={'/nosotros'}>Nosotros</Link>
      <Link to={'/productos'}>Productos</Link>
      <Link to={'/contacto'}>Contacto</Link>
    </div>
  )
}

export default Navegacion
