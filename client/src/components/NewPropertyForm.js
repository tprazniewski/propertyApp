import React , {useState} from 'react'


export function NewPropertyForm() {
  const [data, setData] = useState({
    title: '',
    description: '',
    price: '',
    type: '',
    location: '',
    img: '131231',
    kind: '',
    user_id: 1
  })
  
  const handle = e => {
    const newData = { ...data};
    newData[e.target.id] = e.target.value
    setData(newData)
  }
  
  const submit = (e) =>{
    e.preventDefault();
    const url = 'http://localhost:5001/api/properties'
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
    <form className='place-form' onSubmit={e =>submit(e)}>
      <div className='form-control'><label>title:</label><input onChange={(e) =>handle(e)} id="title" type="text"/></div>
      <div className='form-control'><label>description:</label><input onChange={(e) =>handle(e)}  id="description" type="text"/></div>
      <div className='form-control'><label>price:</label><input onChange={(e) =>handle(e)} id="price" type="text"/></div>
      <div className='form-control'><label>type:</label><input onChange={(e) =>handle(e)} id="type" type="text"/></div>
      <div className='form-control'><label>location:</label><input onChange={(e) =>handle(e)} id="location" type="text"/></div>
      <div className='form-control'><label>img:</label><input onChange={(e) =>handle(e)} id="img" type="text"/></div>
      <div className='form-control'><label>kind:</label><input onChange={(e) =>handle(e)} id="kind" type="text"/></div>
      <button>Submit</button>
      
    </form>
  )
}
