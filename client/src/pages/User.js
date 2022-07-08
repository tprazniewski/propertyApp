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

  // INSERT INTO users (name, surname, dob, email, phone)

  return (
    <div className='todo-list'>
      <div className='todo__item'>
      <h1>{data[0].name} {data[0].surname}</h1>
      <p>{data[0].dob.slice(0, -14)}</p>
      <p>{data[0].email}</p>
      <p>{data[0].phone}</p>
      </div>

      <div className='todo__item2'>
        { userId && userId.map(userId => 
        <Link to={`/properties/${userId.id}`} >
            <h1>{userId.id}</h1>
            <p>{userId.title}</p>
            <p>{userId.price}</p>
          <p>{userId.kind}</p>
        </Link>
        )}
      </div>
    </div>
    
  )
  
}
export default User
