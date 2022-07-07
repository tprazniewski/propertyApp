import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from "../context/Context";
// COMPONENTS
import { Header } from '../components/Header';
import { useParams } from "react-router-dom";


const RentPage = () => {
  const {data, setData} = useContext(AppContext)
  const [listData, setListData] = useState(null)
  const { id } = useParams();
  console.log(id)

  const handleFetch = () => {
    const url = `http://localhost:5001/api/properties?location=${data.name}&type='Sale'`
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
      {data && <p>{data.name}</p>}
      
      <div>
        {data && listData.map(property => <h2>{property.type}</h2>)}
       </div>

    </section>
  )
}

export default RentPage