import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { MovieDetails } from "./pages/movieDetails/MovieDetails";
import HomePages from "./pages/homePage/HomePages";
import { Header } from './components/header/Header';



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />}/>
        <Route  path="/movies/:movieId" element={<MovieDetails />} />
        {/* si una ruta no funciona redirecciona a home */}
        <Route path='*' element={<Navigate replace to="/">404</Navigate>}/>
      </Routes>
    </>
  );
}

export default App;
