import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import InicioSubRuta from '../Views/subrutas/InicioSubruta'
import SubRuta1 from '../Views/subrutas/SubRuta1'
import SubRuta2 from '../Views/subrutas/SubRuta2'

export default function RouterSubRutas() {
  return (
    <div>
        <nav>
            <ol>
                <li><NavLink to="/subrutas/inicio">Inicio de SubRuta</NavLink></li>
                <li><NavLink to="/subrutas/subruta1">SubRuta 1</NavLink></li>
                <li><NavLink to="/subrutas/subruta2">SubRuta 2</NavLink></li>
            </ol>
            <Outlet />
        </nav>
        <Routes>
        <Route path="/subrutas/inicio" element={<InicioSubRuta />} />
        <Route path="/subrutas/subruta1" element={<SubRuta1 />} />
        <Route path="/subrutas/subruta2" element={<SubRuta2 />} />
        </Routes> 
    </div>
  )
}
