import axios from 'axios';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addMovies } from '../redux/actions/action';


function Searchbox(props) {
  const [searchLine,setSearchLine] =useState("")

  const searchLineChangeHandler = (e)=>{
    setSearchLine(e.target.value);
  }
  const searchBoxSubmitHandler=(e)=>{
    e.preventDefault();
    let searchText = searchLine;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c71810d1164395f691866a19d75f58df&query=${searchText}`)
    .then((data)=>{
      console.log(data.data.results)
      if(data.data.results.length === 0 ) {
        throw "Not Found"
      }
      props.dispatch(addMovies(data.data.results))
    })
    .catch(err=>{
      alert(err);
  })
    
    

  }
  return (
    <div className='searchbox'>
        <form onSubmit={searchBoxSubmitHandler}>
            <input type="text" value={searchLine} onChange={searchLineChangeHandler} className='search' placeholder='Write Here... ' />
            <button
                        type="submit"
                        className="search-box__form-submit"
                        
                    >
                        Search 
            </button>
        </form>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    movies:state.movies,
  }
}


export default connect(mapStateToProps)(Searchbox)