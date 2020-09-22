import React, { useState , useEffect } from 'react';
import useFetchAPI from "../../FetchAPI";

const Search  = (props) =>{
    const movieAPI = useFetchAPI();
    const [movieName, setMovieName] = useState("");
    const [categories, setCategories] = useState("movie");
    


    useEffect(() => {
        movieAPI.fetchAPI(movieName, categories);
      }, [movieName, categories]);
    // const fetchMovie = () => {
    //     movieAPI.fetchAPI(movieName, categories);
    //     console.log(fetchMovie)
    // };

    const onFilterChange = (event) => {
        setMovieName(event.target.value)
    };     
    return(
        <div> 
            <div className='container'>	
                <div className='barraBusca'>
                    <form className='buscarFilmes' >
                        {/* <button onClick={fetchMovie}>Fetch API</button> */}
                        <input type="text" onChange={onFilterChange} id="textSearch" placeholder='Busque um filme por nome, ano ou gênero..' name='search'/>
                    </form>
                </div>
            </div>
        </div>    
    )
}
export default Search