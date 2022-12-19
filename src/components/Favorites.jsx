/** @format */

import { Badge } from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";
import { API_IMG } from "../api";
import { removeToMovie } from "../redux/actions/action";


function Favorites(props) {
  const [active, setActive] = useState(false);
  const [title,setTitle] = useState("");
  const [textlink,setTextlink] = useState("#");
  const [inputActive,setInputActive] = useState(true);
  const [linkActive,setLinkActive] = useState(false);
  const showList = () => {
    setActive(!active);
  };
  console.log(props);

  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleSaveList = () => {
    setInputActive(false)
    setLinkActive(true)
  };
  const navigate = useNavigate()


  const saveMovies = () => {
    navigate("/list",{
      state:{
        movies : props.listMovies,
        title: title
      }
    }
    );
  }

  return (
    <div className="menu">
      <section className="elements">
        <button onClick={() => showList()} className="btnshow">
          <Badge
            badgeContent={props.listMovies.length}
            color="warning"
            
          >
            <MovieFilterIcon fontSize="large" />
          </Badge>
        </button>
        <div className={`list  ${active ? "active" : ""}`}>
          {
            props.listMovies.length>0 && <input value={title} onChange={handleInput}
            disabled={inputActive ? null : "disabled"}  className="favorites__name" placeholder="Create List" />
          }
        
          <ul className="favorites_list">
            {props.listMovies.map((item) => {
              return (
                <li className="favorites_list_item" key={item.id}>
                  <img
                    className="poster"
                    src={API_IMG + item.poster_path}
                    alt=""
                  />
                  <div className="info">
                    <p className="favorites_list_title">{item.title} </p>
                    <p className="favorites_list_year">{item.release_date} </p>
                    <button
                      className="delete"
                      onClick={() => props.removeMovie(item.id)}
                    >
                      Remove Film
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          {props.listMovies.length>0 && <button type="button" onClick={() => handleSaveList()} disabled={!title || props.listMovies.length === 0}
                className={`favorites__save ${linkActive ? "link__none" : null}`}>
          Save List
        </button> }
        <button onClick={()=>saveMovies()} className={`link__none ${linkActive ? "link__block" : null}`}>Show List</button>  
        </div> 
      </section>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    listMovies: state.listMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovie: (id) => dispatch(removeToMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
