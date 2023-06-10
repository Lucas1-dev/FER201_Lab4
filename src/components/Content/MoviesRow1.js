import React, {useEffect, useState} from 'react'
import Slider from 'react-slick';
import '../Content/MoviesRow.css'
import Cards from './MovieLists/Card';





function MoviesRow1() {
    const [movieList, setMovieList] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=24fec58a91af92dbc39904c6e65e3560&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <>
            <div className='Container'>
                    <h1 className='heading'>TRENDING MOVIES</h1>
                <Slider {...settings}>         
                {
                    movieList.map((movie, index) => (
                        <div key={index} className='item'>
                        <Cards movie={movie} />
                        </div>
                    ))
                }

                </Slider>
            </div>
        </>
    )
}

export default MoviesRow1;

