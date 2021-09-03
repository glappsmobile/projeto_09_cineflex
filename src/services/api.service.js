import axios from 'axios';

const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies';

const getMovies = () => axios.get(URL);

const getShowTimes = (id) => axios.get(`${URL}/${id}/showtimes`);

export {
    getMovies,
    getShowTimes
}