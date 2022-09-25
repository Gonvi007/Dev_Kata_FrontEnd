import React from 'react'
import './styles.css'
import { blurOnPass, sendForm, blurOnUser } from "./api";

const Form = () => {
  return (
    <div>
        <input onBlur={blurOnUser} type="text" className="input-text" placeholder='Usario'/>
        <input onBlur={blurOnPass} type="text" className="input-text" placeholder='Contraseña'/>
        <input 
        onClick={sendForm} type="button" className='input-button' value="Login" />
    </div>
  )
}
export {Form};