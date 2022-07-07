import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from "../context/Context";
// COMPONENTS
import { Header } from '../components/Header';

const RentPage = () => {
  const {data, setData} = useContext(AppContext)
  const [listData, setListData] = useState(null)

  const handleFetch = () => {
    const url = 'http://localhost:5001/api/users/1'
    fetch(url)
    .then(res => res.json())
    .then(data => setListData(data))
    .catch(e => console.log(e.message))
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <section>
      <Header />
      {data && <p>{data.name}</p>}

    
      {/* {listData && listData.map(item => {
        <Card key={item.id}  name={item.name} />
      }} */}
    </section>
  )
}

export default RentPage