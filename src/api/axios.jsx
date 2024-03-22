import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://43.201.113.203:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
})
export default instance
