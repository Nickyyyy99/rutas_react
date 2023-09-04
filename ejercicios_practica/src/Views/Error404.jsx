import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error404() {
  return (
    <div>
        <h1>Error 404</h1>
        <p>Pagina no encontrada<NavLink>Volver a la pagina de inicio</NavLink></p>
    </div>
  )
}
