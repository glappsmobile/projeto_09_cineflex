import styled from 'styled-components';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Title from '../../shared/Title'
import { getSeats, buySeats } from '../../services/api.service';
import MovieInfoFooter from '../../shared/MovieInfoFooter'
import Seat from './components/Seat'
import Circle from './components/Circle'

const SeatSelectionContaienr = styled.div`
    width: 90%;
    max-width: 500px;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    margin-bottom: 147px;
`

const SeatsContainer = styled.ul`
    display: grid;
    gap: 7px;
    width: 100%;
    grid-template-columns: repeat(10, 1fr);
    margin-top: 30px;;
    max-width: 500px;
`;

const SeatsLabelContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10%;
    width: 100%;
    margin-top: 16px;
    max-width: 370px;
    &>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;
    }
`;

const BuyButton = styled.button`
    background: #E8833A;
    border: none;
    border-radius: 3px;
    width: 225px;
    height: 42px;
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 57px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 42px;
    width: 100%;

`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 0.5rem;
        margin-top: 7px;
    }

    input {
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 3px;
        font-size: 18px;
        padding-left: 18px;
    }
`;

const SeatSelection = () => {
    const { id } = useParams();
    const [session, setSession] = useState([]);
    const [order, setOrder] = useState({name: "", cpf: "", ids: []});

    const selectSeat = (index) => {
        const newSession = { ...session };
        const doSelect = !newSession.seats[index].isSelected;
        newSession.seats[index].isSelected = doSelect;
        setSession(newSession);

        const newOrder = {...order};
        const selectedId = session.seats[index].id;

        if (doSelect) {
            newOrder.ids.push(selectedId);
        } else {
            newOrder.ids = newOrder.ids.filter((id) => id !== selectedId);
        }

        setOrder(newOrder);
    }

    const setCpf = (cpf) => {
        setOrder({ ...order, cpf})
    }

    const setName = (name) => {
        let treatedName = name.replace(/[0-9]/g, '');

        setOrder({ ...order, name: treatedName })
    }


    const isValidName = (name) => /^([\u00C0-\u017FA-Za-z]{2}[ \u00C0-\u017FA-Za-z]*)$/.test(name);

    const isValidPurchase = () => {
        let isValid = true;
        if (!isValidName(order.name)) {
            alert("nome invalido");
            isValid = false;
        }

        return isValid;
    }

    const finishOrder = () =>{
        if (!isValidPurchase()) {
            return;
        }

        buySeats(order)
        .then(console.log)
        .catch((error) => console.log(error.response))
    }

    useEffect(() => {
        getSeats(id)
            .then((res) => {
                console.log(res.data);
                setSession({...res.data});
            });
    }, [id]);

    console.log(order)
    return (
        <SeatSelectionContaienr>
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
                            <Circle isSelected={true} isLabel />
                            <span> Selecionado </span>
                        </div>
                        
                        <div>
                            <Circle isAvailable={true} isLabel />
                            <span> Disponível </span>
                        </div>

                        <div>
                            <Circle isAvailable={false} isLabel />
                            <span>Indisponível</span>
                        </div>
                    </SeatsLabelContainer>
                    
                    <Form>
                        <FormGroup>
                            <label> Nome do comprador: </label>
                            <input 
                                type="text"
                                placeholder="Digite seu nome..."
                                onChange={(e) => setName(e.target.value)}
                                value={order.name}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label> CPF do comprador: </label>
                            <input
                                type="text"
                                placeholder="Digite seu CPF..."
                                onChange={(e) => setCpf(e.target.value)}
                                value={order.cpf}
                            />
                        </FormGroup>
                    </Form>
                  
                    <BuyButton onClick={finishOrder}> Reservar assento(s)</BuyButton>
                   

                    <MovieInfoFooter
                        title={session.movie.title}
                        posterURL={session.movie.posterURL}
                        weekday={session.day.weekday}
                        time={session.name}
                    />
                </>
            ) : "" }
            
        </SeatSelectionContaienr>
    )
}


export default SeatSelection;