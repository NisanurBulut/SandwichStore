import axios from 'axios';

const generalService = axios.create({
  baseURL: ' http://localhost:3001/',
});

export default generalService;
