import axios from "axios";
import { locationMockData } from "./constants";


export const fetchMockData = () => {
  return axios.get(locationMockData);
};
