import Axios from 'axios';

export const JwtToken = () => localStorage.getItem('token') || null;
export const TOKEN_KEY = '0fbfec5e1c6701506ab3f8a3162990ba';

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
		Authorization: `Bearer ${JwtToken()}`,
    'Access-Control-Allow-Origin': '*'
  }
})

export default api