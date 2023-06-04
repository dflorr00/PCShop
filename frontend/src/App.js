import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route} from 'react-router-dom';

import Inicio from './pages/publico/inicioSesion';
import Registro from './pages/publico/registro';
import Home from './pages/privado/home';
import Pago from './pages/privado/pago';
import Prueba from './pages/privado/prueba';
import Ordenadores from './pages/privado/ordenadores';
import Perifericos from './pages/privado/perifericos';
import Smartphones from './pages/privado/smartphones';
import Televisores from './pages/privado/televisores';
import PagoRealizado from './pages/privado/pagoRealizado';


function App() {
  return (
    <><Router>
      <Routes>
        <Route path='/' element={<Navigate to='/inicioSesion' />}></Route>
        <Route path='/inicioSesion' element={<Inicio />}></Route>
        <Route path='/registro' element={<Registro />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/pago' element={<Pago />}></Route>
        <Route path='/prueba' element={<Prueba />}></Route>
        <Route path='/ordenadores' element={<Ordenadores />}></Route>
        <Route path='/perifericos' element={<Perifericos />}></Route>
        <Route path='/televisores' element={<Televisores />}></Route>
        <Route path='/smartphones' element={<Smartphones />}></Route>
        <Route path='/pagoRealizado' element={<PagoRealizado />}></Route>
       

      </Routes>
    </Router></>
  );
}

export default App;