import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Personas() {
    const {nombre, apellido} = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({nuevoNombre: '' , nuevoApellido: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        const {nuevoNombre, nuevoApellido} = formData
        navigate (`/persona/${nuevoNombre}/${nuevoApellido}`)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleReset = () => {
        setFormData ({nuevoNombre: '', nuevoApellido: ''})
    }
  return (
    <div>
        <h1>Persona</h1>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <form onSubmit={handleSubmit} >
        <label>
        Nuevo Nombre:
        <input type='text' name='nuevoNombre' value={formData.nuevoNombre} onChange={handleInputChange} />    
        </label>
        <label>
        Nuevo Apellido:
        <input type='text' name='nuevoApellido' value={formData.nuevoApellido} onChange={handleInputChange}></input>
        </label>
        <button type='submit'>Actualizar</button>
        <button type='button' onClick={handleReset}>Reset</button>
        </form>
    </div>
  )
}
