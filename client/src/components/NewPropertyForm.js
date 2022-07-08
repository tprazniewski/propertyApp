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
    <form onSubmit={e =>submit(e)}>
      <label>title:<input onChange={(e) =>handle(e)} id="title" type="text"/></label>
      <label>description:<input onChange={(e) =>handle(e)}  id="description" type="text"/></label>
      <label>price:<input onChange={(e) =>handle(e)} id="price" type="text"/></label>
      <label>type:<input onChange={(e) =>handle(e)} id="type" type="text"/></label>
      <label>location:<input onChange={(e) =>handle(e)} id="location" type="text"/></label>
      <label>img:<input onChange={(e) =>handle(e)} id="img" type="text"/></label>
      <label>kind:<input onChange={(e) =>handle(e)} id="kind" type="text"/></label>
      <button>Submit</button>
      
    </form>
  )
}
