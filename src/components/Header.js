import styled from "styled-components";

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    color: #E8833A;
    font-size: 34px;
    font-family: Roboto;
`;

const Header = () => (
    <StyledHeader>
        <h1>
            CINEFLEX
        </h1>
    </StyledHeader>
)


export default Header;