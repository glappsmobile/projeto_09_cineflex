import styled from 'styled-components';
import loadingImg from '../assets/loading.svg';
import React, { useState, useEffect } from 'react'

const LoadingContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #E8833A;
    font-size: 24px;

    span {
        margin-top: 20px;
    }
`
const Loading = () =>  (
    <LoadingContainer>
        <object data={loadingImg} type="image/svg+xml" aria-label="Carregando" />
        <span>Carregando</span>
    </LoadingContainer>
);

export default Loading;
