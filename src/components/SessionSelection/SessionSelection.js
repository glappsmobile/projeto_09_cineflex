import styled from 'styled-components';
import React, { useState, useEffect } from 'react'
import Session from './components/Session';
import Title from '../../shared/Title'
import MovieInfo from '../../shared/MovieInfoFooter'
import { getShowTimes } from '../../services/api.service'

const ShowTimesContainer = styled.ul`
    margin: 50px 23px 0 23px;
`;

const SessionSelection = () => {
    const movie = { 
        id: 25, 
        overview: "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        posterURL: "https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        releaseDate: "2020-09-04T00:00:00.000Z",
        title: "Mulan"
    }
    const [showTimes, setShowTimes] = useState([]);

    useEffect(() => {
        getShowTimes(movie.id)
        .then(res => {
            setShowTimes(indexifyObject(res.data.days));
        });
    }, [movie.id]);

    return (
        <>
            <Title> Selecione o horário </Title>
            <ShowTimesContainer>
                {(showTimes.length > 0) ? (
                    showTimes.map((showTime, index) => (
                    <Session {...showTime} key={index} />)
                    )
                ) : (
                    <h1> Carregando </h1>
                )}
            </ShowTimesContainer>
            <MovieInfo />
        </>
    )
}

const indexifyObject = (object) => {
    return Object.keys(object).map(key => {
        return { ...object[key] }
    });
}

export default SessionSelection;