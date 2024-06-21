import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../route/routes';
import { useContextGlobal } from './utils/Context';


const Navbar = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useContextGlobal();

  const themeClass = state.theme === 'dark' ? 'dark-nav' : '';

  return (
    <nav className={themeClass}>
      <div className='dh-logo'>
        <img src="/public/images/DH.png" alt="" className='dh-img' />
      </div>
      <div className='nav-routes'>
      <button onClick={() => navigate(-1)}>
        <h4>⬅Volver</h4>
      </button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favs</h4>
      </Link>
      <button onClick={() => dispatch({type: 'TOGGLE_THEME'})}>
          {state.theme === 'light' ? "🌙" : "☀️"
      }</button>
      </div>
    </nav>
  )
}

export default Navbar