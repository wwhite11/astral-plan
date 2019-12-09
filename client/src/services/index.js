import api from './apiConfig'

export const getStars = async () => {
    try {
      const resp = await api.get('/stars')
      console.log(resp.data.stars)
      return resp.data.stars
    } catch (error) {
      throw error
    }
  }