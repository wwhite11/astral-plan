import api from './apiConfig';

export const signUp = async credentials => {
    try {
        const resp = await api.post('/sign-up', credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const signInUser = async credentials => {
  try {
    const resp = await api.post('/sign-in', credentials);
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

export const changePassword = async (passwords) => {
  try {
    const resp = await api.post('/change-password', passwords);
    return resp.data;
  } catch (error) {
    throw error;
  }
}
