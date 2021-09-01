import axios from "axios";
import React, { useState } from 'react'
import Movie from "./components/Movie";
import styled from "styled-components";

const Title = styled.h1`
    margin-top: 117px;
    margin-bottom: 50px;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-family: Roboto;
    color: #293845;
`;

const MoviesContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
`;

const MovieSelection = () => {
    const [movies, setMovies] = useState([]);
    if (movies.length === 0) { getMovies(setMovies);}
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

const getMovies = (setMovies) => {
    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies`)
        .then(res => {
            setMovies([...res.data])
        });
}

export default MovieSelection;