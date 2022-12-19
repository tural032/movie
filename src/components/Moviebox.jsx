import React from 'react'
import '../App.css'
import { API_IMG } from '../api'
import { Badge } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addToMovie } from '../redux/actions/action'

function Moviebox({poster_path,vote_average,id,disabled,title}) {
  const dispatch = useDispatch()
  const addMovie=()=>{
    dispatch(addToMovie(id))
  }
  return (    
       
    <div className='box'>
      <div className='overlay'>
        <button onClick={()=>addMovie()} disabled={disabled} >Add to List</button>
      </div>
      <img src={API_IMG+poster_path} />
      <div className='vote'>
        <Badge  className='badge' badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}/>
      </div>
    </div>
  )
}



export default Moviebox