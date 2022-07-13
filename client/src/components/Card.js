import React from 'react'
import {Link} from 'react-router-dom';

const Card = ({user}) => {
  const path = `/${user.id}`
console.log(user.name)
  return (
    <>
      {/* <img src={user.img} alt={user.name} /> */}
    <Link className='btn' to={`/users/${user.id}`} >
        <h2>{user.name} {user.surname}</h2>
    </Link>
    </>
  )
}

export default Card          

