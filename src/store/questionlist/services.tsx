import axios from 'axios'
import { API_URL, QUESTION_API } from '../../constants'
export default function getQuestionList() {
  return axios.get(`${QUESTION_API}/test`)
}
