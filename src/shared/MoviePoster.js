import styled from 'styled-components';

const PosterContainer = styled.li`
    width: ${({ small }) => small ? "64px" : "145px"};
    height: ${({ small }) => small ? "89px" : "209px"};
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
    background : ${({ color }) => color}
`;

const Poster = styled.img`
    width: 75%;
    height: 75%;
`;


const MoviePoster = ({title, posterURL, id, small}) => {

    return (
        <PosterContainer small={small} >
            <Poster src={posterURL} alt={title} />
        </PosterContainer>
    )
}

export default MoviePoster;