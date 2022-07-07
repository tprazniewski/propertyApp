import React , {useState, useContext}from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppContext } from "../context/Context";

export const Buttons = () => {

  const {data, setData} = useContext(AppContext)

  const handleData = e => {
    console.log(e.target.value)
    const newData = { ...data};
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const submit = (e) =>{
    
  }

  <Route path="/" element={<Buttons />} />

  return (
    
    <form onSubmit={e =>submit(e)}>
      <label>Location:<input onChange={(e) =>handleData(e)} id="name" type="text"/></label>
      <div>
        <Link to="/sale" data={data}>
          <button>Sale</button>
        </Link>

        <Link to="/rent" data={data}>
          <button>Rent</button>
        </Link>
      </div>
   </form>

  )
}