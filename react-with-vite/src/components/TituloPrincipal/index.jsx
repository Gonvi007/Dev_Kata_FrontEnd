import React from 'react'
import './styles.css'

const TituloPrincipal = () => {
  return (
    <div className='dynamic_text'>
        <div className='container'>
            <span className='static'>Aprendiendo a usar</span>
            <div className='rotate'>
                <span>React</span>
                <span>Vite</span>
                <span>MUI</span>
                <span>Yarn</span>
                <span>Scss</span>

            </div>
        </div>
    </div>
  )
}

export {TituloPrincipal};
