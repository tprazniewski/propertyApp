import React, {useEffect, useState} from 'react'
import {Users} from './components/Users'

function App() {
  // const [backeEndData, setBackEndData] = useState([{}]);

  return (
    <div class="App">
      <h1>  Prroperty App  </h1>
        <div class="users">
          <Users />
        </div>
    </div>
  )
}

export default App