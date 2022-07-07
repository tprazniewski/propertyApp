import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

const User = () => {
  
  const [data, setData] = useState();
  const [count, setCount] = useState(0)
  const { id } = useParams();
  
  console.log(id)
  console.log(data)
  

  useEffect(() => {
    const handleFetch = async () => {
      const url = `http://localhost:5001/api/users/${id}`
      await fetch(url)
      .then(res => res.json())
      .then(data => setData(data[0]))
      .catch(e => console.log(e.message))
    }
    handleFetch()
  },[])

  if (!data) {
    return '....loading'
  }
  // INSERT INTO users (name, surname, dob, email, phone)

  return (
    <div>
      <h1>{data.name} {data.surname}</h1>
      <p>{data.dob.slice(0, -14)}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </div>
  )
  
}
export default User
