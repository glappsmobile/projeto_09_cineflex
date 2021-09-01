import styled from "styled-components";

const Poster = styled.img`
    width: 129px;
    height: 193px;
`;

const PosterContainer = styled.li`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
`;

const Movie = ({title, posterURL}) => {
    return (
        <PosterContainer>
            <Poster src={posterURL} alt={title} />
        </PosterContainer>
    )
}

export default Movie;