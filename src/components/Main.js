import styled from "styled-components";
import { Route, Switch } from 'react-router-dom';
import MovieSelection from '../screens/MovieSelection/MovieSelection';
import SessionSelection from '../screens/SessionSelection/SessionSelection';
import SeatSelection from '../screens/SeatSelection/SeatSelection';
import Success from '../screens/Success/Success';

const StyledMain = styled.main`
    margin-top: 64px;
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Main = () => {
    return (
        <StyledMain>
            <Switch>
                <Route path="/" component={MovieSelection} exact />
                <Route path="/sessoes/:id" component={SessionSelection} exact />
                <Route path="/assentos/:id" component={SeatSelection} exact />
                <Route path="/sucesso" component={Success} exact />
            </Switch>
        </StyledMain>
    )
}

export default Main;