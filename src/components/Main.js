import styled from "styled-components";
import MovieSelection from '../screens/MovieSelection/MovieSelection'

const StyledMain = styled.main`
    margin-top: 64px;
`;

const Main = () => {
    return (
        <StyledMain>
            <MovieSelection />
        </StyledMain>
    )
}

export default Main;