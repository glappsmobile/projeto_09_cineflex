import styled from "styled-components";
import { Route, Switch } from 'react-router-dom'
import MovieSelection from '../screens/MovieSelection/MovieSelection'
import SessionSelection from '../screens/SessionSelection/SessionSelection'

const StyledMain = styled.main`
    margin-top: 64px;
    font-family: Roboto;
`;

const Main = () => {
    return (
        <StyledMain>
            <Switch>
                <Route path="/sessoes/:id" component={SessionSelection} exact />
                <Route path="/" component={MovieSelection} exact />
            </Switch>
            
        </StyledMain>
    )
}

export default Main;