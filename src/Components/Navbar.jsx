import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../route/routes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <Button onClick={() => navigate(-1)}>
        <h4>⬅Volver</h4>
      </Button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favs</h4>
      </Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar