import React, {useEffect, useState} from "react"
import "./MoviesList.css"
import Cards from "./Card"



 function MoviesList() {
    
    const [movieList, setMovieList] = useState([])
   

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=24fec58a91af92dbc39904c6e65e3560&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
    return (
        <div className="movie__list">
            <h2 className="list__title">POPULAR</h2>
            <div className="list__cards">
                {
                    movieList.map((movie, index) => (
                        <div key={index}>
                        <Cards movie={movie} />
                        </div>
                    ))
                }
            </div> 
        </div>
    )
}

export default MoviesList;
