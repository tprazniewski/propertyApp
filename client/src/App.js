import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import {Users} from './components/Users'
import {Properties} from './components/Properties'
import {Header} from './components/Header'
import {Buttons} from './components/Buttons'
import { Form } from './components/Form';

function App() {
  // const [backeEndData, setBackEndData] = useState([{}]);

  return (
    <BrowserRouter>
        <h1> Property App </h1>
        <Header />
        <section>
          <Routes>
              <Route path="/" element={<Buttons />} />
              <Route path="/users" element={<Users />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/users/new" element={<Form />} />
          </Routes> 
        </section>
    </BrowserRouter>
  )
}

export default App