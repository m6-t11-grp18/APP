import axios from 'axios';

const MotoShopApi = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default MotoShopApi