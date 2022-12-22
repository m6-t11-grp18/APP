import axios from 'axios';

export const baseURL = 'http://localhost:3333/';

const MotoShopApi = axios.create({
  baseURL: baseURL,
});

export default MotoShopApi;
