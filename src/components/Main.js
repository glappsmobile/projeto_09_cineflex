import styled from "styled-components";
import MovieSelection from '../screens/MovieSelection/MovieSelection'
import SessionSelection from '../screens/SessionSelection/SessionSelection'

const StyledMain = styled.main`
    margin-top: 64px;
    font-family: Roboto;
`;

const Main = () => {
    return (
        <StyledMain>
            <SessionSelection />
        </StyledMain>
    )
}

export default Main;