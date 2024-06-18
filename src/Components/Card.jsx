import React from "react";
import { Link } from "react-router-dom";


const Card = ({ item }) => {
  const {name, username, id} = item

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <img src="images/doctor.jpg" alt="" className="card-img" />
        <Link to={"/detail/" + id}>
        <h3>{name}</h3>
        <h4>{username}</h4>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
