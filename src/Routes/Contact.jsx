import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/Context';


const Contact = () => {

  const {state} = useContextGlobal()

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <div className={themeClass}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact