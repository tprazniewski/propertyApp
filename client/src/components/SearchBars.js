// import React, { useState, useContext, useEffect } from 'react'
// import magnifying from '../assets/magnifying-glass.svg';
// import DatalistInput from 'react-datalist-input';

// export const SearchBar = () => {
//   const [value, setValue] = useState('')

//   const handleSearch = async (e, state) => {
//     // e.preventDefault();
//     if(state =='sale'){
//       console.log("hejlo")
//     }
//     console.log(e)
//     console.log("elo")
//   };

//   useEffect(() =>{
//     console.log(value);
//   })

//   return (
//     <form  action="submit" onSubmit={(e) => {handleSearch(e)}}>
//       <input placeholder= '...search' onChange = {(e) => { setValue(e.target.value) }} /> 
//       <input id="form-submit" onClick={((e) => {handleSearch('Sale')})} type="submit" value="Sale"/>
//       <input id="form-submit" onClick={((e) => {handleSearch('Rent')})}type="submit" value="Rent"/>
//     </form>
//   )
// }







