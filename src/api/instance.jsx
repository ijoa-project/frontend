import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://43.201.113.203:8080/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
export default instance

//43.201.113.203
