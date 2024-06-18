import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [users, setUsers] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() =>{
    axios(url).then((res) => setUsers(res.data))

  }, [])
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map((user) => (
          <Card item={user} key={user.id} />
        ))}
      </div>
    </main>
  )
}

export default Home