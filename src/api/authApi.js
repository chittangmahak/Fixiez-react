import axiosInstance from './axios';

// POST /signup
export const signupApi = async (payload) => {
  const fixedPayload = {
    ...payload,
    officailAddress: payload.address,
  };
  delete fixedPayload.address;

  const { data } = await axiosInstance.post('/auth/signup', fixedPayload);
  if (data?.token) localStorage.setItem('token', data.token);
  return data;
};

// POST /login
export const loginApi = async (payload) => {
  const { data } = await axiosInstance.post('/auth/login', payload);
  if (data?.token) localStorage.setItem('token', data.token);
  return data;
};

// Verify current session
export const verifyAuthApi = async () => {
  const res = await axiosInstance.get('/auth/verify');
  return res.data;
};

// // Logout API
// export const logoutApi = async () => {
//   const res = await axiosInstance.post('/auth/logout');
//   return res.data;
// };

// POST /logout
export const logoutApi = async () => {
  const { data } = await axiosInstance.post('/auth/logout');
  localStorage.removeItem('token');
  return data;
};
