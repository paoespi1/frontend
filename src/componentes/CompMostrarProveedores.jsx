import axios from 'axios';
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";

const URL = 'https://proynivelacion.onrender.com/api/proveedores/';

const CompMostrarProveedores = () => {
    const [proveedores, setProveedor] = useState([])
    useEffect(() => {
        getProveedores();
    }, []);

    //Funcion para mostrar tareas
    const getProveedores = async () =>{
        const datos = await axios.get(URL);
        setProveedor(datos.data);
    }

    //Funcion para eliminar clientes
    const eliminarProveedores = async (id) => {
        await axios.delete(`${URL}${id}`);
        getProveedores();
    }

    return (
        <div className='container'>
            <h3>Proveedores</h3>   
            <div className='row'>
                <div className='col'>
                    <Link to='/proveedores/agregar' className='btn btn-primary mt-2 mb-2'>
                        <i className='fa-solid fa-user-plus'>Agregar</i></Link>

                    <table className='table'>
                        <thead className='tablethebg'>
                            <tr>
                                <th>Razon Social</th>
                                <th>Numero de Identificacion</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Correo Electronico</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>{
                            proveedores.map((proveedor, index)=>(
                                <tr key = {index}>
                                    <td>{proveedor.razonsocial}</td>
                                    <td>{proveedor.numerodeidentificacion}</td>
                                    <td>{proveedor.telefono}</td>
                                    <td>{proveedor.direccion}</td>
                                    <td>{proveedor.correoelectronico}</td>
                                    <td><Link to={`/proveedores/editar/${proveedor._id}`} className='btn btn-success mt-2 mb-2'>
                                        Editar</Link>
                                        <button onClick={() => eliminarProveedores(proveedor._id)} className="btn btn-danger mt-2 mb-2">Eliminar</button>
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

export default CompMostrarProveedores;