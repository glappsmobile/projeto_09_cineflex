import styled from 'styled-components';

const Circle = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7vw;
    height: 7vw;
    max-width: 26px;
    max-height: 26px;
    margin-bottom: 18px;

    background-color: ${({ isAvailable, isSelected }) => {

        if (isSelected) {
            return '#8DD7CF';
        }

        return (isAvailable) ? '#C3CFD9' : '#FBE192';
    }};
    
    cursor:  ${({ isAvailable, isLabel }) => {
        if (isLabel) {
            return 'default';
        }

        return (isAvailable) ? 'pointer' : 'not-allowed'
    }
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 42px;
    width: 100%;

`

const FormGroupTitle = styled.span`
    font-weight: bold;
    margin-top: 20px;

    &:last-child {
        margin-top: 0px;
        background-color: red;
    }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 0.5rem;
        margin-top: 7px;
    }

    input {
        height: 51px;
        background-color: ${({ isValid }) => isValid ? '#FFFFFF' : 'rgba(220, 53, 69, 0.25)'};
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 3px;
        font-size: 18px;
        padding-left: 18px;
    }

    span {
        color: #dc3545;
        font-size: 12px;
        margin-top: 3px;
        display: ${({ isValid }) => isValid ? 'none' : 'block'}
    }
`;

export {
    Circle,
    SeatSelectionContaienr,
    SeatsContainer,
    SeatsLabelContainer,
    Form,
    FormGroupTitle,
    FormGroup,
}