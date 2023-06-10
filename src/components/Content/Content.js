import React from 'react';
import MoviesRow from './MoviesRow';

import MoviesRow1 from './MoviesRow1';
import MoviesRow2 from './MoviesRow2';
import MoviesList from './MovieLists/MoviesList';


function Content() {
    return (
        <div>
            <MoviesRow />
            <MoviesRow1/>
            <MoviesRow2/>           
            <MoviesList/>
        </div>
    );
}

export default Content;