import axios from 'axios';
import delayAdapterEnhancer from 'axios-delay';

const authService = axios.create({
  baseURL: ' http://localhost:3000/login',
  adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export default authService;
