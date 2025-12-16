import axiosInstance from './axios';

export const loginApi = async (payload) => {
  const { data } = await axiosInstance.post('/auth/login', payload);
  return data;
};

export const signupApi = async (payload) => {
  const { data } = await axiosInstance.post('/auth/signup', payload);
  return data;
};

// Verify current session - Check if cookie is valid
export const verifyAuthApi = async () => {
  const res = await axiosInstance.get('/auth/verify');
  return res.data;
};

// Logout API call - Backend will clear the cookie
export const logoutApi = async () => {
  const res = await axiosInstance.post('/auth/logout');
  return res.data;
};
