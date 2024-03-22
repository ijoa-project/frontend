import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
export default instance
