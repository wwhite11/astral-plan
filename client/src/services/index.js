import api from './apiConfig'

export const getStars = async () => {
    try {
      const resp = await api.get('/stars')
      return resp.data.stars
    } catch (error) {
      throw error
    }
  }

  export const getStarById = async id => {
    try {
      const resp = await api.get(`/stars/${id}`)
      return resp.data.star
    } catch (error) {
      throw error
    }
  }

  export const createStar = async star => {
    try {
      const resp = await api.post('/stars', star)
      return resp
    } catch (error) {
      throw error
    }
  }