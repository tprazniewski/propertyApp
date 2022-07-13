import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from "../context/Context";
// COMPONENTS
import { Header } from '../components/Header';
import { useParams } from "react-router-dom";
import CardProperty from '../components/CardProperty'


const RentPage = () => {
  const {data, setData} = useContext(AppContext)
  const [listData, setListData] = useState(null)
  const { id } = useParams();
  console.log(id)

  const handleFetch = () => {
    const url = `http://localhost:5001/api/properties?location=${data.name}&type='Rent'`
    fetch(url)
    .then(res => res.json())
    .then(data => setListData(data))
    .catch(e => console.log(e.message))
  }

  useEffect(() => {
    handleFetch()
  }, [])

  if (!listData) {
    return '....loading'
  }

  return (
    <section>
      <Header />
      {/* {data && <p>{data.name}</p>} */}
      
      
      <div className='todo-container'>
      {data && listData.map(property => <div className='todo__item'><CardProperty key={property.id} property={property} /> </div>)}
       </div>

    </section>
  )
}

export default RentPage