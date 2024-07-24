import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";

const URL = 'https://proynivelacion.onrender.com/api/tareas';
const CompAgregarTareas = () => {
  
  const [nombre, setNombre] = useState('')
  const [responsable, setresponsable] = useState('')
  const [fecha, setfecha] = useState('')
  const [comentarios, setComentarios] = useState('')
  const navigate = useNavigate();

  //fucion guardar
  const guardarTarea = async (e) => {
    e.preventDefault()
    await axios.post(URL, {
      nombre:nombre, responsable:responsable, fecha:fecha, comentarios:comentarios
    })
    navigate('/tareas')
  }

  return (
    <div>
    <h3>Formulario guardar Tareas</h3>   
    <form onSubmit={guardarTarea}>
      <div className='mb-3'>
        <label className='form-label'>Nombre</label>
        <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} className='from-control' />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Responsable</label>
        <input type="text" value={responsable} onChange={(e)=>setresponsable(e.target.value)} className='from-control' />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Fecha</label>
        <input type="date" value={fecha} onChange={(e)=>setfecha(e.target.value)} className='from-control' />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Comentarios</label>
        <input type="text" value={comentarios} onChange={(e)=>setComentarios(e.target.value)} className='from-control' />
      </div>
      <button type='submit' className='btn btn-primary'>Guardar</button>
    </form>
    </div>
  )
}

export default CompAgregarTareas
