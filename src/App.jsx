import './App.css';
//Importamos reac router dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importamos componentes
import CompMostrarTareas from './componentes/CompMostrarTareas';
import CompAgregarTareas from './componentes/CompAgregarTareas';
import CompModificarTareas from './componentes/CompModificarTareas';
import CompMostrarProveedores from './componentes/CompMostrarProveedores';
import CompAgregarProveedores from './componentes/CompAgregarProveedores';
import CompModificarProveedores from './componentes/CompModificarProveedores';
import MenuC from './componentes/MenuC';
import Cfooter from './componentes/Cfooter';
function App() {
    
  return (
   <div className='App'>
    <MenuC></MenuC>
      <BrowserRouter>
        <Routes>
          <Route path='/tareas'exact element={<CompMostrarTareas/>}/>
          <Route path='/tareas/agregar'exact element={<CompAgregarTareas/>}/>
          <Route path='/tareas/editar/:id'exact element={<CompModificarTareas/>}/>
          <Route path='/proveedores'exact element={<CompMostrarProveedores/>}/>
          <Route path='/proveedores/agregar'exact element={<CompAgregarProveedores/>}/>
          <Route path='/proveedores/editar/:id'exact element={<CompModificarProveedores/>}/>
        </Routes>
      </BrowserRouter>
      <Cfooter></Cfooter>
   </div> 
  )
}
export default App