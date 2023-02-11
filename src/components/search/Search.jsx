import React, {useState, useEffect} from 'react'
import './Search.css'
import {  BsSearch } from 'react-icons/bs';
import {  useNavigate } from 'react-router-dom';




export const Search = () => {

    const [search, setSearch] = useState("")
    // cambiar ruta
    const navigate = useNavigate();


    useEffect(() => {
        setSearch(search || "")
    }, [search]);


    const handleSubmit = (e) => {
        e.preventDefault();   
        navigate("/?search=" + search )
    }

  return (
    <form className='search-container' onSubmit={handleSubmit}>
    <div className='search-box'>
        <input className='search-input' type='text' 
        // le pasamos el valor 
        // value={search} 
        value={search}
        // y como podemos cambiar dicho valor con onchange
        onChange ={(e) => {
            setSearch(e.target.value)
        }}
        placeholder="Title" />
        
        <button className='search-button' type='submit'> <BsSearch size={20}/></button>
    </div>   
    </form>
   
  )

  
}
