import Axios from 'axios'

let apiUrl

const apiUrls = {
  production: 'https://astral-plan.herokuapp.com/api',
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = Axios.create({
  baseURL: apiUrl,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default api