import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import {Users} from './components/Users'
import {Properties} from './components/Properties'
import {Header} from './components/Header'
import {Buttons} from './components/Buttons'
import { Form } from './components/Form';
import {toRent} from './components/ToRent'
import {forSale} from './components/ForSale'
import RentPage from './pages/RentPage'
import User from './pages/User'
import {NewPropertyForm} from './components/NewPropertyForm';

function App() {
  // const [backeEndData, setBackEndData] = useState([{}]);

  return (
    <BrowserRouter>
        <h1> Property App </h1>
        <Header />
        <section>
          <Routes>
              <Route path="/" element={<Buttons />} />
              <Route path="/sale" element={<forSale />} />
              <Route path="/rent" element={<RentPage />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/new" element={<NewPropertyForm />} />
              <Route path="/users/new" element={<Form />} />
          </Routes> 
        </section>
    </BrowserRouter>
  )
}

export default App