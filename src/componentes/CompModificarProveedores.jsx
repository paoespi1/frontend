import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {useState, useEffect} from "react";

const URL = 'https://proynivelacion.onrender.com/api/proveedores/';
const CompModificarProveedores = () => {
  
  const [razonsocial, setrazonsocial] = useState('')
  const [numerodeidentificacion, setnumerodeidentificacion] = useState('')
  const [telefono, settelefono] = useState('')
  const [direccion, setdireccion] = useState('')
  const [correoelectronico, setcorreoelectronico] = useState('')
  const navigate = useNavigate();
  const {id} = useParams();
  //funcion modificar
  const modificarProveedor = async (e) => {
    e.preventDefault()
    await axios.put(`${URL}${id}`, {
      razonsocial:razonsocial, numerodeidentificacion:numerodeidentificacion,telefono:telefono, direccion:direccion,correoelectronico:correoelectronico
    })
    navigate('/proveedores')
  }

  useEffect(()=>{
    getProveedoresById();
  }, [])

  async function getProveedoresById() {
    const res = await axios.get(`${URL}${id}`);
    setrazonsocial(res.data.razonsocial);
    setnumerodeidentificacion(res.data.numerodeidentificacion);
    settelefono(res.data.telefono);
    setdireccion(res.data.direccion);
    setcorreoelectronico(res.data.correoelectronico);
  }

  return (
    <div>
    <h3>Formulario Editar Proveedores</h3>   
    <form onSubmit={modificarProveedor}>
      <div className='mb-3'>
        <label className='form-label'>Razon Social</label>
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
        <label className='form-label'>Correo Electrico</label>
        <input type="text" value={correoelectronico} onChange={(e)=>setcorreoelectronico(e.target.value)} className='form-control' />
      </div>
      <button type='submit' className='btn btn-primary'>Guardar</button>
    </form>
    </div>
  )
}

export default CompModificarProveedores;
