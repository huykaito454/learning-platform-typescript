import axios from "axios";
import { API_URL } from "../../constants";
export default function getUser() {
  return axios.get(`${API_URL}`);
}
