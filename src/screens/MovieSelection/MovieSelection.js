import styled from 'styled-components';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Movie from '../../shared/MoviePoster';
import Title from '../../shared/Title'
import { getMovies } from '../../services/api.service';

const MoviesContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 50px;
`;

const MovieSelection = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getMovies().then((res) => setMovies(res.data));
    }, []);

    return (
        <div>
            <Title>Selecione o filme</Title>
            {(movies.length > 0) ? (
                <MoviesContainer >
                    {movies.map((movie, index) => (
                        <Link to={`/sessoes/${movie.id}`} key={index}>
                            <Movie {...movie} />
                        </Link>
                    ))}
                </MoviesContainer>
            ) : (
                <h1> Carregando </h1>
            )}
        </div>
    )
}


export default MovieSelection;