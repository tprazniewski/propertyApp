import React from 'react'
import {Link} from 'react-router-dom';

const Card = ({user}) => {
  const path = `/${user.id}`
console.log(user.name)
  return (
    <>
      {/* <img src={user.img} alt={user.name} /> */}
    <Link to={`/users/${user.id}`} >
        <h2>{user.name}</h2>
    </Link>
    </>
  )
}

export default Card          

