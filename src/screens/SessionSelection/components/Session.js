import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TimeRectangle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 43px;
    margin-right: 8px;
    border-radius: 3px;
    background-color: #E8833A;
    color: #FFFFFF;
    font-size: 18px;
`;

const SessionLabel = styled.p`
    font-size: 20px;
`;

const ShowTimesContainer = styled.div`
    display: flex;
    margin: 22px 0;
`;

const Session = ({weekday, date, showtimes}) => {
    return (
        <li>
            <SessionLabel>
                {weekday} - {date}
            </SessionLabel>

            <ShowTimesContainer>
                {showtimes.map((showtime, index) => (
                    <Link to={`/assentos/${showtime.id}`} key={index} >
                        <TimeRectangle>
                            {showtime.name}
                        </TimeRectangle>
                    </ Link>
                ))}
            </ShowTimesContainer>
            
        </li>
        
    )
}

export default Session;