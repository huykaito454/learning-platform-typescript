import axios from "axios";
import { API_URL } from "../../constants";
export default function getQuestionList() {
  return axios.get(`${API_URL}/test`);
}
