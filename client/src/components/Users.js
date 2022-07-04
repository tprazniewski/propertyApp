import React, {useState, useEffect} from 'react'
// import {getUsers} from '../utilities/api'
const test = [1,5,6,7]
export const Users = () => {
const [users, setUsers] = useState([])

const getUsers = () => {
  const url = 'http://localhost:5001/api/users'
  return fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  .then(res => res.json())
  .then(res => setUsers(res.user))
  .catch(err => console.error(err.message))
}
useEffect(() => {
  getUsers()
}, [])
    return (
    	<div>
      {users.map(name => <h2>{name}</h2>)}
      	</div>
    )

}




// renderowanie warunkowe