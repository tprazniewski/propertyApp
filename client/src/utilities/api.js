const getUsers = async() => {
  const url = 'http://localhost:5001/api/users'
  return fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err.message))
}

export {getUsers}