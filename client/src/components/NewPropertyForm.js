import React , {useState} from 'react'


export function NewPropertyForm() {
  const [data, setData] = useState({
    title: '',
    description: '',
    price: '',
    type: '',
    location: '',
    img: '',
    kind: '',
    property_id: ''
  })
  
  const handle = e => {
    const newData = { ...data};
    newData[e.target.id] = e.target.value
    setData(newData)
  }
  
  const submit = (e) =>{
    e.preventDefault();
    const url = 'http://localhost:5001/api/users'
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .catch(e => console.log(e.message))
    
  }
  
  return (
    // <form className="place-form">
    <form onSubmit={e =>submit(e)}>
      <label>Name:<input onChange={(e) =>handle(e)} id="name" type="text"/></label>
      <label>Surname:<input onChange={(e) =>handle(e)}  id="surname" type="text"/></label>
      <label>DOB:<input onChange={(e) =>handle(e)} id="dob" type="text"/></label>
      <label>email:<input onChange={(e) =>handle(e)} id="email" type="text"/></label>
      <label>phone:<input onChange={(e) =>handle(e)} id="phone" type="text"/></label>
      <button>Submit</button>
      
    </form>
  )
}
