import React from 'react'
import { useLocation } from 'react-router-dom'
import { API_IMG } from '../../api'
import "./ListPage.css"
import { useNavigate } from 'react-router-dom'
function ListPage() {
  const navigate =useNavigate()
  const location =useLocation()
  console.log(location.state)
  return (
    <div>
    <div className='bar'>
      <h1>{location.state.title}</h1>
    </div>
    
    <div className='mylist'>
      
      {
      location.state.movies.map((movie)=>(
        <div className="item">
          <h3>{movie.title}</h3>
          <div className='Overlay'>
            <div className="overlay2">
              <div className="overview">{movie.overview}</div>
            </div>
           <img src={`${API_IMG}${movie.poster_path}`} />
          </div>
          
          {/* <p>{movie.overview}</p> */}
        </div>
      )
      )
      }
      
    </div>
    <div className='btn_home'>
    <button onClick={()=>navigate("/")}>Turn Back</button>
    </div>
    
    </div>
  
  )
}


export default ListPage
