/** @format */

import axios from "axios";
import { API_URL } from "../../api";


  const {data} = await axios.get(API_URL)
  let myarr= data.results 


const initState = {
  popular:myarr,
  movies: [],
  listMovies: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MOVIES":
      return {
        ...state,
        movies: [...action.payload.movies],
      };
      
    case "ADD_TO_MOVIES":
      // const newMovie = state.movies.find(
      //   (item) => item.id === action.payload.id
      // );
      const allMovies = [...state.movies,...state.popular]
      const newMovie = allMovies.find((item) => item.id === action.payload.id);
      const listMovies = [...state.listMovies,{...newMovie}];
      return {
        ...state,
        listMovies,
      };

      case "REMOVE_TO_MOVIE":
        const filterMovie = state.listMovies.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          listMovies: filterMovie,
        };

    default:
      return state;
  }
};
export default reducer;
