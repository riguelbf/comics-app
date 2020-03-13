import axios from 'axios';
import { BASE_URL_MARVEL } from "../config";

const request = axios.create({
  baseURL: BASE_URL_MARVEL,
});

export default request;
