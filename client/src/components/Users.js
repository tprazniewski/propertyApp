
import React, {useState, useEffect} from 'react'
import Card from './Card'
export const Users = () => {

  const [data, setData] = useState([]);

  const handleFetch = () => {
    const url = 'http://localhost:5001/api/users/'
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(e => console.log(e.message))
  }

  useEffect(() => {
    // console.log(data)
    handleFetch()
  }, [])

      return (
        <div className='todo-container'>
          <h2 className='todo-contailer__text'> User List</h2>
        {data && data.map(user =><div className='todo__item'> <Card key={user.id} user={user} /> </div>)}
        </div>
      )
  
  }