import axios from 'axios';

const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/';

const getMovies = () => axios.get(API_URL);

const getShowTimes = (movieId) => axios.get(`${API_URL}/movies/${movieId}/showtimes`);

const getSeats = (sessionId) => axios.get(`${API_URL}/showtimes/${sessionId}/seats`)

export {
    getMovies,
    getShowTimes,
    getSeats
}