import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContextGlobal()

  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <div className={themeClass}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.fav.map((user) => (
          <Card item={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
