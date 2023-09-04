import React from 'react'
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Views/Home'
import Error404 from '../Views/Error404'
import Componente1 from '../Views/Componente1'
import Componente2 from '../Views/Componente2'
import RouterSubRutas from './RouterSubRutas'
import Persona from '../Views/Personas'
import InicioSubRuta from '../Views/subrutas/InicioSubruta'
import SubRuta1 from '../Views/subrutas/SubRuta1'
import SubRuta2 from '../Views/subrutas/SubRuta2'

export default function RouterPrincipal() {
  return (
    <div>
        <BrowserRouter>
        <nav>
            <ol>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/componente1">Componente 1</NavLink></li>
                <li><NavLink to="/componente2">Componente 2</NavLink></li>
                <li><NavLink to="/subrutas">SubRutas</NavLink></li>
            </ol>
            <ol>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/persona">Persona</NavLink></li>
            <li><NavLink to="/navegar">Navegar</NavLink></li>
            </ol>
        </nav>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/componente1" element={<Componente1 />} />
        <Route path="/componente2" element={<Componente2 />} />
        <Route path="/subrutas/*" element={<RouterSubRutas />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/subrutas/inicio" index element={<InicioSubRuta />} />
        <Route path="/subrutas/subruta1" element={<SubRuta1 />} />
        <Route path="/subrutas/subruta2" element={<SubRuta2 />} />
        <Route path='/persona/:nombre/:apellido' element={<Persona />} />
        <Route path='/persona/:nombre/' element={<Persona />} />
        <Route path='/persona/' element={<Persona />} />
        <Route path='/navegar' element={<Navigate to='/persona/' />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
