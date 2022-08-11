import axios from 'axios'
import { API_URL } from '../../constants'
export default function getUser(email: string) {
  return axios.post(`${API_URL}login`, {
    email: email,
  })
}

export async function authenticate(username: string, password: string) {
  const res = await axios.post(
    `${API_URL}login`,
    {
      username: username,
      password: password,
    },
    { withCredentials: true },
  )
  return res
}
