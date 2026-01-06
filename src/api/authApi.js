import axiosInstance from './axios';

export const signupApi = async (payload) => {
  const fixedPayload = {
    ...payload,
    officialAddress: payload.address,
  };
  delete fixedPayload.address;

  const { data } = await axiosInstance.post('/auth/signup', fixedPayload);
  // if (data?.token) localStorage.setItem('token', data.token);
  return data;
};

export const loginApi = async (payload) => {
  const { data } = await axiosInstance.post('/auth/login', payload);
  // if (data?.token) localStorage.setItem('token', data.token);
  return data;
};

// Verify current session
// export const verifyAuthApi = async () => {
//   const res = await axiosInstance.get('/auth/verify');
//   return res.data;
// };

export const verifyAuthApi = async () => {
  const res = await axiosInstance.get('/auth/verify', {
    withCredentials: true,
  });
  return res.data;
};

export const logoutApi = async () => {
  const { data } = await axiosInstance.post('/auth/logout');

  return data;
};

const handleSendCode = async (phone) => {
  try {
    const response = await axiosInstance.post('/send-code', {
      phoneNumber: phone, 
    });
    alert('Check your WhatsApp!');
  } catch (err) {
    console.error(err);
  }
};
