import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css'

const App = () => {
  const [contacts, setContacts] =useState ([])

  // const MyContact = (props) => {
  // const MyContact = ({name, phone}) => {
  const MyContact = ({name, username, phone}) => {
    return (
      <li className='contact-row'>
      <div>
        <img className='contact-avatar' src="https://picsum.photos/100/100" alt="foto de perfil" />
      </div>

      <div className="contact-info">
          <h4>{name}</h4>
          <h4>{username}</h4>
          {/* <h4>{name}</h4> */}
          {/* <h4>{props.name}</h4> */}
          {/* <span >{props.phone}</span> */}
          {/* <span >{phone}</span> */}
          <span >{phone}</span>
        <div className='phone-icon'>
          <span>📱</span>
        </div>
      </div>
    </li>
    )
  }

  const getContacts = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      setContacts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  useEffect (()=> {
    getContacts()
  }, [])

  return (
    <div className="App">
      <div>
        <input type="text" placeholder='Search' />
      </div>

      <ul>
        {/* <MyContact name={'Xochilt'} phone={'987634454'}/> */}
        {
        contacts.map(contac=>
        <MyContact key={contac.id} name={contac.name} username={contac.username}  phone={contac.phone}/>
        )
        }
      </ul>
      {/* {JSON.stringify(contacts)} */}
    </div>
  )
}

export default App
