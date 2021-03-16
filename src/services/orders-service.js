import axios from 'axios';

const oderService = axios.create({
  baseURL: ' http://localhost:3001/',
});

export default orderService;
