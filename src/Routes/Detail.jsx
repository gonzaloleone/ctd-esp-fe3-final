import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const params = useParams();
  const [user, setUser] = useState({})
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`


  useEffect(() => {
    axios(url).then((res) => setUser(res.data))
  }, [])

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.website}</h3>
    </>
  )
}

export default Detail