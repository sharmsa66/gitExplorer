import axios from 'axios';

  export const instance = axios.create({
  baseURL: 'https://burgershop-88c01.firebaseio.com/'
});

export default instance;
