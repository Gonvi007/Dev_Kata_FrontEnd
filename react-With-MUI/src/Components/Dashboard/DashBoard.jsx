// import { useState } from 'react'
import { useState, Fragment, useEffect} from 'react';
import './stylesDashBoard.css'

const DashBoard = () => {
  // const [count, setCount] = useState(0)

  // const [screenName, setScreenNam] = useState('Hola DashBoard');
  // const [textoDelAmor, settextoDelAmor] = useState('Hola mi perrita hermosa');
  const [input, setInput] = useState('')

  const [showPassword, setShowPassword] = useState(false);
  

  const cambioEnInput = (event) => {
    setInput(event.target.value);
  };

  const mostrarContrasena = () => {setShowPassword(!showPassword)}  

useEffect(() => {
  console.log(input);
}, [input]) 

const alertContrasena = () => {setShowPassword (alert(input))}
return (
    <Fragment>
      <input
      type={showPassword ? "text": "password" } onChange={cambioEnInput} value={input}>
      </input>
      <button onClick={mostrarContrasena } >👀</button>
      <button onClick={alertContrasena} >👀</button>

    </Fragment>
  );
};

export {DashBoard};