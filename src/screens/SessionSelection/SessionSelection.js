import styled from 'styled-components';
import React, { useState, useEffect } from 'react'
import Session from './components/Session';
import Title from '../../shared/Title'
import MovieInfoFooter from '../../shared/MovieInfoFooter'
import { getShowTimes } from '../../services/api.service'
import {useParams} from 'react-router-dom'
import Loading from '../../shared/Loading'


const ShowTimesContainer = styled.ul`
    margin: 50px 23px 0 23px;
    width: 90%;
`;

const SessionSelection = () => {
    const {id} = useParams();

    const [showTimes, setShowTimes] = useState([]);

    useEffect(() => {
        getShowTimes(id)
        .then(res => {
            const newShowTimes = res.data;
            newShowTimes.days = indexifyObject(newShowTimes.days)
            setShowTimes(newShowTimes);
        });
    }, [id]);

    return (
        <>
            <Title> Selecione o horário </Title>
            <ShowTimesContainer>
                {(showTimes.days) ? (
                    showTimes.days.map((day, index) => (
                        <Session {...day} key={index}  />
                    ))
                ) : (
                    <Loading />
                )}
            </ShowTimesContainer>
            <MovieInfoFooter 
                title={showTimes.title}
                posterURL={showTimes.posterURL}
            />
        </>
    )
}

const indexifyObject = (object) => {
    return Object.keys(object).map(key => {
        return { ...object[key] }
    });
}

export default SessionSelection;