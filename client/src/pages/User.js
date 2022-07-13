import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import CardProperty from '../components/CardProperty'
import {Link} from 'react-router-dom';


const User = () => {
  
  const [data, setData] = useState();
  const [userId, setUserId] = useState();
  const { id } = useParams();
  
  
  const handleFetch = async (url, set) => {
    await fetch(url)
    .then(res => res.json())
    .then(data => set(data))
    .catch(e => console.log(e.message))
  }

  useEffect(() => {
    // handleFetch(`http://localhost:5001/api/users/${id}?combine=true`, setData )
    handleFetch(`http://localhost:5001/api/users/${id}`, setData )
    handleFetch(`http://localhost:5001/api/properties?user_id=${id}`,setUserId )
  },[])

  if (!data) {
    return '....loading'
  }
  console.log(userId)

  return (
    <div className='todo-list'>
      <h2 className="todo-contailer__text"> User</h2>
      <div className='todo__item btn'>
      <h1>Name Surname: {data[0].name} {data[0].surname}</h1>
      <p>Dob: {data[0].dob.slice(0, -14)}</p>
      <p>Email: {data[0].email}</p>
      <p>Phone: {data[0].phone}</p>
      </div>
      <h2 className="todo-contailer__text"> Your Properties</h2>
      <div className='todo__item2'>
        { userId && userId.map(userId => 
           <div className='todo__item-in' >
        <Link class="btn" to={`/properties/${userId.id}`} >
            <p>Title: {userId.title}</p>
            <p>Price: {userId.price}</p>
            <p>Kind: {userId.kind}</p>
            <p>Location: {userId.location}</p>
        </Link>
            </div>
        )}
      </div>
    </div>
    
  )
  
}
export default User
