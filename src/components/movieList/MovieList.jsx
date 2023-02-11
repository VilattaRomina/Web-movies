import React, { useEffect, useState } from 'react'
import getApi from '../../services/getApi';
import { Card } from '../card/Card'
import Spinner from '../spinner/Spinner';
//libreria para paginacion infinita
import InfiniteScroll from 'react-infinite-scroll-component'
import './MovieList.css'



export const MovieList = ({search}) => {

  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

 

  useEffect(() => {
    // setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    getApi(searchUrl)
      .then((data) => {
        // concatenar pelis anteriores con pelis nuevas
        setMovies((prevMovies) => prevMovies.concat(data.results));
        // setIsLoading(false);
      });
  }, [search, page]);

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <InfiniteScroll
     dataLength={movies.length} 
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={true}
      loader={<Spinner/>}
    >
      <div className='container-movie-list'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </InfiniteScroll>
  )
}
