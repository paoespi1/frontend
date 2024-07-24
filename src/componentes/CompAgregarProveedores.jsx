import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";

const URL = 'https://proynivelacion.onrender.com/api/proveedores';
const CompAgregarProveedores = () => {
  
  const [razonsocial, setrazonsocial] = useState('')
  const [numerodeidentificacion, setnumerodeidentificacion] = useState('')
  const [telefono, settelefono] = useState('')
  const [direccion, setdireccion] = useState('')
  const [correoelectronico, setcorreoelectronico] = useState('')
  const navigate = useNavigate();

  //fucion guardar
  const guardarProveedor = async (e) => {
    e.preventDefault()
    await axios.post(URL, {
      razonsocial:razonsocial, numerodeidentificacion:numerodeidentificacion, telefono:telefono, direccion:direccion, correoelectronico:correoelectronico
    })
    navigate('/proveedores')
  }

  return (
    <div>
    <h3>Formulario Agregar Proveedores</h3>   
    <form onSubmit={guardarProveedor}>
      <div className='mb-3'>
        <label className='form-label'>Nombre</label>
        <input type="text" value={razonsocial} onChange={(e)=>setrazonsocial(e.target.value)} className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Numero de Identificacion</label>
        <input type="text" value={numerodeidentificacion} onChange={(e)=>setnumerodeidentificacion(e.target.value)} className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Telefono</label>
        <input type="text" value={telefono} onChange={(e)=>settelefono(e.target.value)} className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Direccion</label>
        <input type="text" value={direccion} onChange={(e)=>setdireccion(e.target.value)} className='form-control' />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Correo Electronico</label>
        <input type="text" value={correoelectronico} onChange={(e)=>setcorreoelectronico(e.target.value)} className='form-control' />
      </div>
      <button type='submit' className='btn btn-primary'>Guardar</button>
    </form>
    </div>
  )
}

export default CompAgregarProveedores
