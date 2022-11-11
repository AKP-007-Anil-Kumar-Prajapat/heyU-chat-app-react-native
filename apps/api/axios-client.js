import axios from 'axios';
const BASE_URL = 'https://randomuser.me/api/';

const axiosClient = () => {
  return axios.create({
    baseURL: BASE_URL,
  });
};

export default axiosClient;
