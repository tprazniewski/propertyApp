
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
        <div>
        {data && data.map(user => <Card key={user.id} user={user} />)}
        </div>
      )
  
  }