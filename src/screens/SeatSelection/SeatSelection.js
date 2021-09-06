import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Title from '../../shared/Title'
import { getSeats, buySeats } from '../../services/api.service';
import MovieInfoFooter from '../../shared/MovieInfoFooter'
import Seat from './components/Seat'
import {cpfMask, removeCpfMask} from '../../helpers/cpfMask'
import {
    Circle,
    Form, 
    FormGroup, 
    BuyButton, 
    FormGroupTitle, 
    SeatSelectionContaienr, 
    SeatsContainer, 
    SeatsLabelContainer
} from './components/StyledComponents'

const SeatSelection = () => {
    const { id } = useParams();
    const [session, setSession] = useState([]);
    const [order, setOrder] = useState({compradores:[], ids: []});
    const [forms, setForms] = useState([]);

    const selectSeat = (index) => {
        const clickedSeat = session.seats[index];
        const selectedId = clickedSeat.id;
        const newOrder = { ...order };
        let newForms = [...forms];

        if (!order.ids.includes(selectedId)) {
            newOrder.ids.push(selectedId);

            newOrder.compradores.push({
                idAssento: selectedId,
                nome: "",
                cpf: ""
            });

             newForms.push({
                 seatId: selectedId,
                 seatName: clickedSeat.name,
                 name: { value: "", isValid: true }, 
                 cpf: { value: "", isValid: true } 
            });
        } else {
            newOrder.ids = newOrder.ids.filter((id) => id !== selectedId);
            newOrder.compradores = newOrder.compradores.filter(({ idAssento }) => idAssento !== selectedId);

            newForms = newForms.filter((form) => form.seatId !== selectedId);
        }

       newOrder.ids.sort((a, b) => a - b);
       newOrder.compradores.sort((a, b) => a.idAssento - b.idAssento);
       newForms.sort((a, b) => a.seatId - b.seatId);
        setForms(newForms);
        setOrder(newOrder);
    }

    const setCpf = (cpf, index) => {
        const newForms = [...forms];
        newForms[index] = { ...newForms[index], cpf: { value: cpfMask(cpf), isValid: true }}
        setForms(newForms);

        const newOrder = { ...order };
        newOrder.compradores[index] = { ...newOrder.compradores[index], cpf: removeCpfMask(cpf) };
        setOrder(newOrder);
    }

    const setName = (name, index) => {
        const newForms = [...forms];

        let treatedName = name.replace(/[0-9]/g, '').replace(/^ +/gm, '');;
        newForms[index] = { ...newForms[index], name: { value: treatedName, isValid: true } }
        
        treatedName = treatedName.replace(/\s+$/g, '');
        setForms(newForms);

        const newOrder = { ...order };
        newOrder.compradores[index] = { ...newOrder.compradores[index], nome:treatedName};
        setOrder(newOrder);
    }

    const isValidName = (name) => /^([\u00C0-\u017FA-Za-z]{2}[ \u00C0-\u017FA-Za-z]*)$/.test(name);
    const isCpfValid = (cpf) => cpf.replace(/[^0-9]/g, '').length === 11;

    const isValidPurchase = () => {

        if (order.ids.length === 0) {
            alert("Selecione pelo menos um assento.")
            return false;
        }

        let isValid = true;
        const newForms = forms.map((form, i) => {
            const newForm = {...form};

            if (!isValidName(form.name.value)) {
                isValid = false;
                newForm.name.isValid = isValid;
            }

            if (!isCpfValid(form.cpf.value)) {
                isValid = false;
                newForm.cpf.isValid = isValid;
            }

            return newForm;
        })

        setForms(newForms);
        return isValid;
    }

    const finishOrder = () =>{
        if (!isValidPurchase()) {
            return;
        }

        buySeats(order)
        .then(console.log)
        .catch((error) => console.log(error.response));

        console.log("Bought:")
        console.log(order);
    }

    useEffect(() => {
        getSeats(id)
            .then((res) => {
                const newSession = {...res.data};
                newSession.seats = newSession.seats.map((seat) => {
                    const newName = (seat.name.length > 1) ? `${seat.name}` : `0${seat.name}`;
                    return {...seat, name: newName }
                })
                setSession(newSession);
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
                                isSelected={order.ids.includes(seat.id)}
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
                    
                    { forms.length > 0 && (
                    <Form>
                        {forms.map((form, index) => (
                        <React.Fragment key={index}>
                            {(forms.length > 1) && (
                                <FormGroupTitle>Assento {form.seatName}</FormGroupTitle>
                            )}
                            <FormGroup isValid={form.name.isValid}>
                                <label> Nome do comprador: </label>
                                <input 
                                    type="text"
                                    placeholder="Digite o nome do comprador..."
                                    onChange={(e) => setName(e.target.value, index)}
                                    value={form.name.value}
                                />
                                <span>Informe um nome válido.</span>
                            </FormGroup>

                            <FormGroup isValid={form.cpf.isValid}>
                                <label> CPF do comprador: </label>
                                <input
                                    type="text"
                                    placeholder="Digite o CPF do comprador..."
                                    onChange={(e) => setCpf(e.target.value, index)}
                                    value={form.cpf.value}
                                />
                                <span>Informe um CPF válido.</span>
                            </FormGroup>
                        </React.Fragment>
                        ))}
                    </Form>
                    )}
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