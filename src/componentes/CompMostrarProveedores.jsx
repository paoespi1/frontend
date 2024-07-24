import axios from 'axios';
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";

const URL = 'https://proynivelacion.onrender.com/api/tareas/';

const CompMostrarTareas = () => {
    const [tareas, setTarea] = useState([])
    useEffect(() => {
        getTareas();
    }, []);

    //Funcion para mostrar tareas
    const getTareas = async () =>{
        const datos = await axios.get(URL);
        setTarea(datos.data);
    }

    //Funcion para eliminar clientes
    const eliminarTareas = async (id) => {
        await axios.delete(`${URL}${id}`);
        getTareas();
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/tareas/agregar' className='btn btn-primary mt-2 mb-2'>
                        <i className='fa-solid fa-user-plus'>Agregar</i></Link>

                    <table className='table'>
                        <thead className='tablethebg'>
                            <tr>
                                <th>nombre</th>
                                <th>responsable</th>
                                <th>fecha</th>
                                <th>comentarios</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>{
                            tareas.map((tarea, index)=>(
                                <tr key = {index}>
                                    <td>{tarea.nombre}</td>
                                    <td>{tarea.responsable}</td>
                                    <td>{tarea.fecha}</td>
                                    <td>{tarea.comentarios}</td>
                                    <td><Link to={`/tareas/editar/${tarea._id}`} className='btn btn-success mt-2 mb-2'>
                                        Editar</Link>
                                        <button onClick={() => eliminarTareas(tarea._id)} className="btn btn-danger mt-2 mb-2">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default CompMostrarTareas;