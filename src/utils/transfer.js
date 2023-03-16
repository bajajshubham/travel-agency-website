import Axios from "axios";
import { locationMockData } from "./constants";


export const fetchMockData = () => {
  return Axios.get(locationMockData);
};
