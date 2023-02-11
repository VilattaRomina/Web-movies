import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';
import getApi from '../../services/getApi';
import './MovieDetails.css'

export const MovieDetails = () => {

    const [movie, setMovie]= useState(null)
    const {movieId} =useParams()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getApi('/movie/' + movieId).then(data => {
            setIsLoading(false)
            setMovie(data)
        })
    }, [movieId]);

    if(isLoading){
        return <Spinner />
    }

    if(!movie){
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <section className='content-details'>
            <div className='content-img'>
            <img src={imageUrl} alt={movie.title} />
            </div>
            <div className='content-info'>
                <p className='title'><strong>Title:</strong> {movie.title}</p>
                <p className='genre'>
                    <strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p className='description'><strong>Description:</strong> {movie.overview}</p>
            </div>
        </section>
    )
}
