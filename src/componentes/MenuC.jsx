/* eslint-disable no-unused-vars */
import React from 'react'

const MenuC = () => {
  return (
    <div>
      <nav className='d-flex flex-wrap justify.content-center py-3 mb-4 border-bottom'>
        <a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
        <span className='fs-4'>WebSite</span>
        </a>
        <ul className='nav nav-pills'>
            <li className='nav-item'> <a href="/" className='nav-link'>Inicio </a></li>
            <li className='nav-item'> <a href="/tareas" className='nav-link'> Tareas </a></li>
            <li className='nav-item'> <a href="/proveedores" className='nav-link'> Proveedores </a></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default MenuC
