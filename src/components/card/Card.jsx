import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <div className='movie-card'>
    {/* entra a la pelicula sin refrescar el navegador con Link */}
      <Link to={"/movies/" + movie.id} className='link'>
        <div className='movie-card-title'>{movie.title}</div>
        <img 
        src={imageUrl} 
        alt={movie.title}
        className= 'movie-card-img'
        />
      </Link>
    </div>
  )
}
