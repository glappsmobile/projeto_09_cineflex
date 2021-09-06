import { Circle } from './StyledComponents'

const Seat = ({ name, id, isAvailable, isSelected, selectSeat }) => {

    const select = () => {
        if (isAvailable) {
            selectSeat(Number(name) - 1);
        } else {
            alert("Esse assento não está disponível");
        }
    }
    
    return (
        <Circle
            isAvailable={isAvailable}
            isSelected={isSelected}
            onClick={select}
        >
            {name}
        </Circle>
    )
}

export default Seat;