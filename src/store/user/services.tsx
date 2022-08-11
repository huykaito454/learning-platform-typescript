import axios from 'axios'
import { API_URL } from '../../constants'
<<<<<<< HEAD
export default function getUser(id: number) {
  return axios.post(`${API_URL}login`, {
    params: { id: id },
=======
export default function getUser(email: string) {
  return axios.post(`${API_URL}login`, {
    email: email,
>>>>>>> c1d0eb2bf93b5df6c3a4da61b8f3821373abfd42
  })
}

export async function authenticate(username: string, password: string) {
  const res = await axios.post(`${API_URL}login`, {
    username: username,
    password: password,
  })
  return res
}
