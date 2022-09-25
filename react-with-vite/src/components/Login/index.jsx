import React from 'react'
import "./styles.css"
import { Anchor } from '../Anchor'
import { Form } from '../Form'

const Login = () => {
  return (
    <div className='login'>
      <h1>Bienvenido</h1>

      <Form/>

      <div className='options'>
      <Anchor href="#" text="¿Perdiste tu contraseña?"/>
      <Anchor href="#" text="¿No tienes cuenta? Registrate"/>
      </div>
    </div>
  )
}
export {Login};