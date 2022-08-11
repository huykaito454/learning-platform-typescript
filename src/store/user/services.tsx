import axios from 'axios'
import { API_URL } from '../../constants'
export default function getUser(id: number) {
  return axios.post(`${API_URL}login`, {
    params: { id: id },
  })
}
