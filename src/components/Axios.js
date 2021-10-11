import axios from 'axios'

axios.interceptors.response.use(undefined, function retryIntercept(er) {
  if (er.response.status === 401) {
    window.location.replace('#/401')
  }
  return Promise.reject(er)
})

const Axios = axios

export default Axios
