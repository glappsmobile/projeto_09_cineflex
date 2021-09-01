import styled from 'styled-components';
import axios from 'axios';
import React, { useState } from 'react'
import Movie from './components/Movie';
import Title from '../../shared/Title'

const MoviesContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 50px;
`;

const MovieSelection = () => {
    const [movies, setMovies] = useState([]);
    if (movies.length === 0) { updateMovies(setMovies); }
    console.log(movies)
    return (
        <div>
            <Title>Selecione o filme</Title>
            {(movies.length > 0) ? (
                <MoviesContainer >
                    {movies.map((movie, index) => <Movie {...movie} key={index} />)}
                </MoviesContainer>
            ) : (
                <h1> Carregando </h1>
            )}
        </div>
    )
}

const updateMovies = (setMovies) => {
    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies`)
        .then(res => {
            setMovies([...res.data])
        });
}

export default MovieSelection;