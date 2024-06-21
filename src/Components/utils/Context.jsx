import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const ContextGlobal = createContext();

const lsFav = JSON.parse(localStorage.getItem("fav")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS": //Esto es obligatorio
      return { ...state, users: action.payload };
    case "ADD_FAV": //Esto es obligatorio
      return { ...state, fav: [...state.fav, action.payload] };
    case "DELETE_FAV": //Esto es extra
      const filterFav = state.fav.filter(
        (i) => i.id !== action.payload.id
      );
      return { ...state, fav: filterFav };
    case "TOGGLE_THEME": 
      return { ...state, theme: state.theme === "light" ? "dark" : "light"};
    default:
      throw new Error("No se pudo modificar el estado.");
  }
};

const initialState = {
  users: [],
  fav: lsFav,
  theme: "light", //Puede inicializarse con un string o con un booleano
};

export const ContextProvider = ({ children }) => {
  // const [fav, setFav] = useState(lsFav);
  // const [users, setUsers] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() =>{
    axios(url).then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.fav));
  }, [state.fav]);
  

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;

export const useContextGlobal = () => useContext(ContextGlobal);
