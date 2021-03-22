import axios from 'axios';
import delayAdapterEnhancer from 'axios-delay';

const generalService = axios.create({
  baseURL: ' http://localhost:3001/',
  adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export default generalService;
