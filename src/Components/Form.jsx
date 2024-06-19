import React, { useState } from "react";
import Button from './Button';


const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) =>
    setCliente({ ...cliente, nombre: e.target.value });
  const handleEmail = (e) =>
    setCliente({ ...cliente, email: e.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (cliente.nombre.length > 5 && regex.test(cliente.email)) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre completo" value={cliente.nombre} onChange={handleName}/>
        <input type="email" placeholder="Coloque su email" value={cliente.email} onChange={handleEmail}/>
        <Button>Enviar</Button>
      </form>
      {error && "Por favor, revise sus datos"}
      {show && <h2>Muchas gracias ${cliente.nombre}, te contactaremos via email cuanto antes</h2> }
    </div>
  );
};

export default Form;
