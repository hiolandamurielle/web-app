import React, { useState , useEffect } from 'react';
import useFetchAPI from "../../FetchAPI";

const Home = (props) => {
    const movieAPI = useFetchAPI();
    return(
    <div>
        {movieAPI.data.results && movieAPI.data.results.map((movie) => {
            return (
                <li key={movie.id}>
                    <div className='conteudoPrincipal'> 
                        <div className='container'>	
                            <div className='conteudoFilme'>
                                <div className='image'>
                                    <div className='poster'>
                                    <a href=""><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img></a>
                                    </div>
                                </div>
                                <div className='details'>
                                    <div className='wrapper'>
                                        <div className='title'>
                                            <h2>{movie.original_title}</h2>
                                        </div>
                                        <div className='consensus details'>
                                        <div className='outer_ring'>
                                            <div className='user_score_chart' data-percent='82.0' data-track-color="#204529" data-bar-color="#21d07a">
                                                <div className='percent'>
                                                <span className="icon icon-r82">{movie.vote_average}%</span>
                                                </div>
                                                <canvas height="60" width="60"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='release'>
                                        <span className='release_date'> {movie.release_date}</span>
                                    </div>    
                                    <div className='overview' >
                                    
                                        <p>{movie.overview}</p>

                                    </div>                                        
                                </div>    
                            </div>    
                        </div>
                    </div>            

                </li>
                
            );
        })}
    </div>    
    )
}

export default Home