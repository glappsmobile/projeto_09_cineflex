import styled from 'styled-components';
import MoviePoster from './MoviePoster'

const MovieInfoContainer = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 117px;
    padding-left: 10px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 26px;
    color: #293845;
    margin-left: 22px;
`;


const MovieInfo = ({title, posterURL, weekday, time}) => {

    return (
        <MovieInfoContainer>
            <MoviePoster
                title={title} 
                posterURL={posterURL} 
                small  
            />
            <InfoContainer>
                <div>
                    {title}
                </div>
                {weekday && (
                    <div>
                        {weekday} - {time}
                    </div>
                )}  
            </InfoContainer>
        </MovieInfoContainer>
    )
}

export default MovieInfo;