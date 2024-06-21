import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
const {state, dispatch} = useContextGlobal()

  const themeClass = state.theme === 'dark' ? 'dark' : '';


  return (
    <main className={themeClass} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.users.map((user) => (
          <Card item={user} key={user.id} />
        ))}
      </div>
    </main>
  )
}

export default Home