import axios from "axios";
import { API_URL } from "../../constants";
export default function getUser(id: number) {
  return axios.get(`${API_URL}profile`, {
    params: { id: id },
  });
}
