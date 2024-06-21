import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/Context";


const Card = ({ item }) => {
  const {name, username, id} = item
  const {state, dispatch} = useContextGlobal()
  const findFav = state.fav.find((i) => id === i.id);

  const addFav = () => {
    if (findFav) {
      dispatch({ type: "DELETE_FAV", payload: item });
    } else {
      dispatch({ type: "ADD_FAV", payload: item });
    }
  };

  return (
    <div className="card">
        <img src="images/doctor.jpg" alt="" className="card-img" />
        <Link to={"/detail/" + id}>
        <h3>{name}</h3>
        <h4>{username}</h4>
        </Link>
        {<button className="favButton" onClick={addFav}>{findFav ? "❌" : "⭐"}</button>}
    </div>
  );
};

export default Card;
