import Circle from './Circle'

const Seat = ({ name, id, isAvailable, isSelected, selectSeat }) => {

    const seatText = (name.length > 1) ? `${name}` : `0${name}`;
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
            {seatText}
        </Circle>
    )
}

export default Seat;