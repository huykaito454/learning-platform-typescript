import axios from 'axios'
import { API_URL, QUESTION_API } from '../../constants'
export default async function getQuestionList() {
  const token = localStorage.getItem('token')!
  const res = await axios.get(`${QUESTION_API}math/generate`, {
    headers: {
      "Content-Type" : "application/json",
      Authorization: "Bearer " + token
    }
  })
  return res
}
