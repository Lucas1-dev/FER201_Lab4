import React, { useEffect, useState } from "react"
import "./MoviesDetail.css"
import { useParams } from "react-router-dom"
// import { Icon } from "react-materialize"
// import ModalCase from "./ModalCase"
import ModalVideo from 'react-modal-video'
import "react-modal-video/scss/modal-video.scss";


const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=24fec58a91af92dbc39904c6e65e3560&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    // const [video, setVideo] = useState() 
    // useEffect(() => {
    //     getDatabyMovie()
    // },[] )
    // const getDatabyMovie = () => {
    //     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=24fec58a91af92dbc39904c6e65e3560`)
    //         .then(res => res.json())
    //         .then(data => setVideo(data))

    // }
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt="/" />

            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="/" />



                    </div>


                    {/* <a onClick={() => { isOpen && <ModalCase setIsOpen={setIsOpen} /> }} className="btn-floating halfway-fab waves-effect waves-light red">
                        <Icon>ondemand_video</Icon></a> */}

                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">

                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                    ?
                                    currentMovieDetail.genres.map(genre => (
                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    <div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={`aOb15GVFZxU`} onClose={() => setOpen(false)} />
                        {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={video? video.key : ""} onClose={() => setOpen(false)} /> */}

                        <button className="btn-primary" onClick={() => setOpen(true)}>Play Trailer</button>
                    </div>
                </div>  
            </div>


        </div>
    )
}

export default Movie