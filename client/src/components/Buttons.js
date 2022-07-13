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
    <div class="container">
    <form onSubmit={e =>submit(e)}>
      <label>Location:<input onChange={(e) =>handleData(e)} id="name" type="text"/></label>
      <div>
        <div className='btns'>

        <Link to="/sale" data={data}>
          <button class="btn2">Sale</button>
        </Link>

        <Link to="/rent" data={data}>
          <button class="btn2">Rent</button>
        </Link>
        </div>
      </div>
   </form>
</div>
  )
}