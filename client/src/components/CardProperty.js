import React from 'react'
import {Link} from 'react-router-dom';

const CardProperty = ({property}) => {
  console.log("weszlo")
  console.log(property)
  const path = `/${property.id}`
  return (
    <>
      {/* <img src={user.img} alt={user.name} /> */}
    <Link to={`/properties/${property.id}`} >
        <h2>{property.title}</h2>
    </Link>
    </>
  )
}

export default CardProperty          

