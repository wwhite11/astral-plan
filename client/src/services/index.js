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

  export const createStar = async (user, star) => {
    try {
      const resp = await api.post(`/users/${user}/stars`, star)
      return resp
    } catch (error) {
      throw error
    }
  }

  export const updateStar = async (userId, starId, data) => {
    try {
      const resp = await api.put(`/users/${userId}/stars/${starId}`, data);
      return resp.data
    } catch (error) {
      throw error
    }
  }

  export const deleteStar = async (starId, userId) => {
    try {
      const resp = await api.delete(`/users/${userId}/stars/${starId}`)
      return resp.data
    } catch (error) {
      throw error
    }
  }
