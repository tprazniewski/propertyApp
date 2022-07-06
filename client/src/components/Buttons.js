import React from 'react';
import { Link } from 'react-router-dom';
import {SearchBar} from './SearchBars'


export const Buttons = () => {
  return (

    <div>
      <input></input>
      <Link to="/sale">
        <button>Sale</button>
      </Link>

      <Link to="/rent">
        <button>Rent</button>
      </Link>
    </div>
  )
}