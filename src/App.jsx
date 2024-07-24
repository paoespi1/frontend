import './App.css';
//Importamos reac router dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importamos componentes
import CompMostrarTareas from './componentes/CompMostrarTareas';
import CompAgregarTareas from './componentes/CompAgregarTareas';
import CompModificarTareas from './componentes/CompModificarTareas';
import MenuC from './componentes/MenuC';

function App() {
    
  return (
   <div className='App'>
    <MenuC></MenuC>
      <BrowserRouter>
        <Routes>
          <Route path='/tareas'exact element={<CompMostrarTareas/>}/>
          <Route path='/tareas/agregar'exact element={<CompAgregarTareas/>}/>
          <Route path='/tareas/editar/:id'exact element={<CompModificarTareas/>}/>
          

        </Routes>
      </BrowserRouter>
   </div> 
  )
}
export default App