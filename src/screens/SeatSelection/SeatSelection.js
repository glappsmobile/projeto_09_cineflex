import styled from 'styled-components';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Title from '../../shared/Title'
import { getSeats } from '../../services/api.service';

const SeatsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(10, 1fr [col-start]);
    padding: 0 24px;
    margin-top: 30px;;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`;

const SeatsLabelContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr [col-start]);
    grid-gap: 5%;
    margin-top: 16px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    box-sizing: border-box;

    &>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;
    }
`;

const Circle = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7vw;
    height: 7vw;
    max-width: 26px;
    max-height: 26px;
    margin-bottom: 18px;

    background-color: ${({isAvailable, isSelected}) => {

        if (isSelected) {
            return '#8DD7CF';
        }

        return (isAvailable)? '#C3CFD9' : '#FBE192';
    }};
    
    cursor:  ${({ isAvailable, isLabel }) => {
        if (isLabel){
            return 'default';
        }

        return (isAvailable) ? 'pointer' : 'not-allowed'}
    };
    
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 6vw;
    font-size: 11px;
    color: #000000;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    -webkit-tap-highlight-color: transparent;
`;

const Seat = ({name, isAvailable, isSelected, selectSeat}) => {

    const seatText = (name.length > 1) ? `${name}` : `0${name}`;
    const select = () => {
        if (isAvailable) {
            selectSeat(Number(name) - 1)
        }
    }

    return (
        <Circle 
            isAvailable={isAvailable} 
            isSelected={isSelected}
            onClick={select}
        > 
            {seatText} 
        </Circle>
    )
}


const MovieSelection = () => {

    const { id } = useParams();
    const [session, setSession] = useState([]);

    const selectSeat = (index) => {
        const newArraySeats = [...session.seats];
        newArraySeats[index].isSelected = !newArraySeats[index].isSelected;
        const newSession = {...session};
        newSession.seats = newArraySeats;
        setSession(newSession);
    }

    useEffect(() => {
        getSeats(id)
            .then((res) => {
                console.log(res.data);
                setSession({...res.data});
            });
    }, [id]);

    return (
        <div>
            <Title>Selecione o(s) assento(s)</Title>
            {session.seats? (
                <>
                    <SeatsContainer>
                        {session.seats.map((seat) => (
                            <Seat 
                                key={seat.id} 
                                selectSeat={selectSeat} 
                                {...seat}     
                            />
                        ))}
                    </SeatsContainer>

                    <SeatsLabelContainer>
                        <div>
                            <Circle
                                isSelected={true}
                                isLabel
                            />
                            <span> Selecionado </span>
                        </div>
                        
                        <div>
                            <Circle
                                isAvailable={true}
                                isLabel
                            />
                            <span> Disponível </span>
                        </div>
                        <div>
                            <Circle
                                isAvailable={false}
                                isLabel
                            />
                            <span>Indisponível</span>
                        </div>
                            
                    </SeatsLabelContainer>
                </>
            ) : "" }
            
        </div>
    )
}


export default MovieSelection;