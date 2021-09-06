import React from 'react';
import styled from 'styled-components';
import Title from '../../shared/Title'
import { cpfMask } from '../../helpers/cpfMask';
import Button from '../../shared/Button'
import {useLocation, Link} from 'react-router-dom';

const SuccessContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    h1 {
        color: #247A6B;
        font-weight: bold;
        margin-bottom: 50px;
    }

    h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    span {
        color: #293845;
        display: block;
        font-size: 22px;
        margin-top: 3px;
    }

`;

const Grid = styled.div`
    display: grid;
    width: 90%;
    gap: 40px 0;
`;

const BuyerInfo = styled.div`
    display: grid;
    width: 90%;
    gap: 20px 0;
`;

const Success = () => {
    const { order } = useLocation().state;

    return (
            <SuccessContainer>
                <Title>Pedido feito  <br /> com sucesso!</Title>
                <Grid>
                    <div>
                        <h2>Filme e sessão</h2>
                        <span>{order.session.name}</span>
                        <span>{order.session.date} {order.session.time}</span>
                    </div>

                    <div>
                        <h2>{(order.seatNames.length > 1) ? "Ingressos" : "Ingresso: "}</h2>
                        {order.seatNames.map((seatName, index) => (
                            <span key={index}>Assento {seatName}</span>
                        ))}
                    </div>

                    <div>
                        <h2>{(order.compradores.length > 1) ? "Compradores" : "Comprador: "}</h2>
                        <BuyerInfo>
                        {order.compradores.map(({nome, cpf}, index) => (
                            <div key={index}>
                                <span>Nome: {nome}</span>
                                <span>CPF: {cpfMask(cpf)}</span>
                                {(order.seatNames.length > 1) && (
                                    <span> Assento: {order.seatNames[index]}</span>
                                )}
                            </div>
                        ))}
                        </BuyerInfo>
                    </div>
                </Grid>
                <Link to={"/"}>
                    <Button> Voltar pra Home</Button>
                </Link>
                
            </SuccessContainer>
    )
}

export default Success;