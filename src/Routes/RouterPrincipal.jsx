import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Views/Home'
import Error404 from '../Views/Error404'
import Componente1 from '../Views/Componente1'
import Componente2 from '../Views/Componente2'
import RouterSubRutas from './RouterSubRutas'

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
        </nav>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/componente1" element={<Componente1 />} />
        <Route path="/componente2" element={<Componente2 />} />
        <Route path="/subrutas/*" element={<RouterSubRutas />} />
        <Route path="*" element={<Error404 />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
