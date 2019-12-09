import Axios from 'axios'

<<<<<<< HEAD
// Grab the JSON Web Token (JWT) from localStorage and set to a variable so we can send the token in the HTTP Header
=======
const JwtToken = localStorage.getItem('token') || null
>>>>>>> 3f37bcb4c387f5697932f00fe795f3912d01f78b

let apiUrl

const apiUrls = {
<<<<<<< HEAD
  production: 'https://astral-plan.herokuapp.com/api',
=======
  production: 'https://sei-items-api.herokuapp.com/api',
>>>>>>> 3f37bcb4c387f5697932f00fe795f3912d01f78b
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = Axios.create({
<<<<<<< HEAD
  baseURL: apiUrl,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default api
=======
	baseURL: apiUrl,
	headers: {
		Authorization: `Bearer ${JwtToken}`,
		'Access-Control-Allow-Origin': '*'
	}
})

export default api
>>>>>>> 3f37bcb4c387f5697932f00fe795f3912d01f78b
