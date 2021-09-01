import styled from 'styled-components';

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
                    <TimeRectangle key={index}>
                        {showtime.name}
                    </TimeRectangle>
                ))}
            </ShowTimesContainer>
            
        </li>
        
    )
}

export default Session;