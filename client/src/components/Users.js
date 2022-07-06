import React, {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import {getUsers} from '../utilities/api'
export const Users = () => {
const [users, setUsers] = useState([])
// const params = useParams();
// console.log(params)
const getUsers = () => {
  const url = 'http://localhost:5001/api/users'
  return fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  .then(res => res.json())
  .then(res => setUsers(res))
  .catch(err => console.error(err.message))
}
useEffect(() => {
  getUsers()
}, [])
    return (
    	<div>
      {users.map(name => <h2>{name.id}</h2>)}
      {users.map(name => <h2>{name.name}</h2>)}
      	</div>
    )

}




// renderowanie warunkowe