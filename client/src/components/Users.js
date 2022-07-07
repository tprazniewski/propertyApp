import React, {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import {getUsers} from '../utilities/api'
export const Users = () => {
  const [users, setUsers] = useState([])
  
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
        {users.map(user => <h2>{user.length}</h2>)}
        {users.map(user => <h2>{user.name}</h2>)}
          </div>
      )
  
  }
