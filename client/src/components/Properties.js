import React, {useState, useEffect} from 'react'
import CardProperty from './CardProperty'
// import {getUsers} from '../utilities/api'
export const Properties = () => {
const [properties, setProperties] = useState([])
const [data, setData] = useState([]);

const getUsers = () => {
  const url = 'http://localhost:5001/api/properties'
  return fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  .then(res => res.json())
  .then(res => setProperties(res))
  .catch(err => console.error(err.message))
}
useEffect(() => {
  getUsers()
}, [])
    return (
    	<div className='todo-container'>
          <h2 className='todo-contailer__text'> Properties List</h2>
          {data && properties.map(property => <div className='todo__item'><CardProperty key={property.id} property={property} /> </div>)}
      </div>
    )

}




// renderowanie warunkowe