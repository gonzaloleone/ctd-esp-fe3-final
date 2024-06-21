import React from 'react'
import { useContextGlobal } from './utils/Context';

const Footer = () => {

  const {state, dispatch} = useContextGlobal();

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <footer className={themeClass}>
      <div className='footer-text'>
        <p>TEXTO DEL FOOTER</p>
      </div>
      <div className='footer-images'>
        <div>
          <img src="/public/images/DH.png" alt='DH-logo' />
        </div>
        <div>
          <img className='redes' src="/public/images/ico-facebook.png" alt="" />
          <img className='redes' src="/public/images/ico-instagram.png" alt="" />
          <img className='redes' src="/public/images/ico-tiktok.png" alt="" />
          <img className='redes' src="/public/images/ico-whatsapp.png" alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
