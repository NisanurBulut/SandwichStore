import axios from 'axios';

const orderService = axios.create({
  baseURL: ' http://localhost:3001/',
});

export default orderService;
