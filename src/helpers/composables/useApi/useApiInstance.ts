import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
  baseURL: (import.meta.env.VITE_API_HOST as string) || 'http://localhost:8080',
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
})

export default instance
