import React, {useState, useEffect} from 'react'
// import {getUsers} from '../utilities/api'
export const Properties = () => {
const [properties, setProperties] = useState([])

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
    	<div>
      {properties.map(name => <h2>{name.title}</h2>)}
      {properties.map(name => <h2>{name.price}</h2>)}
      	</div>
    )

}




// renderowanie warunkowe