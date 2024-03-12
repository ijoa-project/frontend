import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://54.180.106.211:8080/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
export default instance
