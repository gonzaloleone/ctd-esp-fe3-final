import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/Context';

const Detail = () => {

  const params = useParams();
  const [user, setUser] = useState({})
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  const {state} = useContextGlobal()

  const themeClass = state.theme === 'dark' ? 'dark' : '';


  useEffect(() => {
    axios(url).then((res) => setUser(res.data))
  }, [])

  return (
    <div className={themeClass}>
      <h1>Detail Dentist id </h1>
      <h3>Nombre: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Phone: {user.phone}</h3>
      <h3>Website: {user.website}</h3>
    </div>
  )
}

export default Detail