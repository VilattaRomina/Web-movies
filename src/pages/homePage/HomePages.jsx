import React from 'react'
import { useQuery } from '../../components/hooks/useQuery';
import { MovieList } from '../../components/movieList/MovieList'



const HomePages = () => {

  const query = useQuery();
  const search = query.get("search");

  return (
    <>
      {/* resetear la busqueda:sirve porque si cambio la clave(key) de un componente, react lo destruye y lo vuelve a crear devuelta, cuando cambia la busqueda el componente se vuelve a crear */}
      <MovieList  key={search} search={search} />
    </>
  )
}

export default HomePages