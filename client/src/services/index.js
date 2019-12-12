import api from './apiConfig'

// general read functions 

export const getStars = async () => {
    try {
      const resp = await api.get('/stars')
      return resp.data.stars
    } catch (error) {
      throw error
    }
  }

  export const getStarsByUser = async (userId) => {
    try {
      const resp = await api.get(`/users/${userId}/stars`)
      return resp.data.stars
    } catch (error) {
      throw error
    }
  }

  // star operations

  export const getStarById = async id => {
    try {
      const resp = await api.get(`/stars/${id}`)
      return resp.data.star
    } catch (error) {
      throw error
    }
  }

  export const createStar = async (user, starData) => {
    try {
      const resp = await api.post(`/users/${user}/stars`, starData)
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

  // planet operations 

  export const getPlanetById = async id => {
    try {
      const resp = await api.get(`/planets/${id}`)
      return resp.data.planet
    } catch (error) {
      throw error
    }
  }
  
  export const createPlanet = async (user, star, planetData) => {
    try {
      const resp = await api.post(`/users/${user}/${star}/planets`, planetData)
      return resp
    } catch (error) {
      throw error
    }
  }

  export const updatePlanet = async (userId, planetId, data) => {
    try {
      const resp = await api.put(`/users/${userId}/planets/${planetId}`, data);
      return resp.data
    } catch (error) {
      throw error
    }
  }

  export const deletePlanet = async (planetId, userId) => {
    try {
      const resp = await api.delete(`/users/${userId}/planets/${planetId}`)
      return resp.data
    } catch (error) {
      throw error
    }
  }

    // moon operations 
  
    export const createMoon = async (user, star, moonData) => {
      try {
        const resp = await api.post(`/users/${user}/${star}/moons`, moonData)
        return resp
      } catch (error) {
        throw error
      }
    }
  
    export const updateMoon = async (userId, moonId, data) => {
      try {
        const resp = await api.put(`/users/${userId}/moons/${moonId}`, data);
        return resp.data
      } catch (error) {
        throw error
      }
    }