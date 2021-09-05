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

export default Circle;