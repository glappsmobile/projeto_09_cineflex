import styled from 'styled-components';
import axios from 'axios';
import React, { useState } from 'react'
import Session from './components/Session';
import Title from '../../shared/Title'

const SessionsContainer = styled.ul`
    margin: 50px 23px 0 23px;
`;


const SessionSelection = () => {
    const movie = { 
        id: 4, 
        overview: "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        posterURL: "https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        releaseDate: "2020-09-04T00:00:00.000Z",
        title: "Mulan"
    }
    const [sessions, setSessions] = useState([]);
    if (sessions.length === 0) { updateSessions(setSessions, movie.id); }

    console.log(sessions);
    return (
        <>
            <Title> Selecione o horário </Title>
            <SessionsContainer>
                {(sessions.length > 0) ? (
                    sessions.map((session, index) => (
                    <Session {...session} key={index} />)
                    )
                ) : (
                    <h1> Carregando </h1>
                )}
            </SessionsContainer>
        </>
    )
}

const objectToArray = (object) => {
    return Object.keys(object).map(key => {
        return {...object[key]}
    });
}

const updateSessions = (setSessions, id) => {
    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${id}/showtimes`)
        .then(res => {
            setSessions(objectToArray({...res.data.days}));
        });
}

export default SessionSelection;