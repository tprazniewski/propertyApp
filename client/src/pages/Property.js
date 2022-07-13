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
      const url = `http://localhost:5001/api/properties/${id}`
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

  return (
    <div className='todo-list'>
      <div className='todo__item'>
        <h1>Title: {data.title}</h1>
        <h1> Description: {data.description}</h1>
        <p> Price: {data.price}</p>
        <p> Type: {data.type}</p>
        <p> Location: {data.location}</p>
      </div>
    </div>
  )
  
}
export default User
