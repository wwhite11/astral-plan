import api from './apiConfig';

export const signUp = async credentials => {
    try {
        const resp = await api.post('/signup', credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const signInUser = async credentials => {
  try {
    const resp = await api.post('/signin', credentials);
    localStorage.setItem('token', resp.data.token);
    return resp.data;
  } catch (error) {
    throw error
  }
}

export const signOut = async user => {
  try {
    await localStorage.clear();
    return true;
  } catch (error) {
    throw error
  }
}

export const getUserForUpdate = async user => {
  try {
    const resp = await api.get(`/users/${user}`);
    return resp.data;
  } catch (error) {
    throw error
  }
}

export const updateUser = async (id, credentials) => {
  try {
    const resp = await api.put(`/users/${id}`, credentials);
    return resp.data
  } catch (error) {
    throw error
  }
}

export const changePassword = async (passwords) => {
  try {
    const resp = await api.post('/change-password', passwords);
    return resp.data;
  } catch (error) {
    throw error;
  }
}
