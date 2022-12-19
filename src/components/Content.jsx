import React from 'react'
import '../App.css'
import axios from 'axios'
import { API_URL } from '../api'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Moviebox from './Moviebox'
import { connect } from 'react-redux';



function Content(props) {
    const [popular,setPopular] = useState([])
    
    console.log(props)
    const getMovies =async()=>{
        const {data} = await axios.get(API_URL)
        setPopular(data.results);
        console.log(data.results)
    }
   
    useEffect(()=>{
        getMovies()
    },[])
   const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1724,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 1524,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3 ,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint:900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div>

{ 
  props.movies.length>1 &&
  <div className="Popular">
  <h1>Search Results</h1>
  <Slider {...settings}>{props.movies.map((movie)=>(
    <Moviebox  key={movie.id} disabled={props.listMovies.find(el => el.id === movie.id)} {...movie} />))}
  </Slider>
  </div> 
}

    <div className="Popular">
    <h1>Popular</h1>
    <Slider {...settings}>{props.popular.map((movie)=>(
      <Moviebox  key={movie.title} disabled={props.listMovies.find(el => el.id === movie.id)} {...movie}/>))}
    </Slider>
    </div>

    {/* <div className="Upcoming">
    <h1>Upcoming</h1>
    <Slider {...settings}>{upcoming.map((movie)=>(
      <Moviebox  key={movie.id} {...movie}/>))}
    </Slider>
    </div> */}


    </div> 
  )
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    popular : state.popular,
    listMovies: state.listMovies,
  };
};

export default connect(mapStateToProps)(Content)