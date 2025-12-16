import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyAuthApi } from '../../api/authApi.js';
import { loginSuccess, setInitialized } from '../../redux/slices/authSlices.js';
import { CircularProgress, Box } from '@mui/material';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { isInitialized } = useSelector((state) => state.auth);

  useEffect(() => {
    let mounted = true;

    const verifyAuthentication = async () => {
      try {
        const response = await verifyAuthApi();
        if (!mounted) return;

        if (response?.success && response?.user) {
          dispatch(loginSuccess(response.user));
        }
      } catch (error) {
        console.error('Auth verification failed:', error);
      } finally {
        if (mounted) dispatch(setInitialized());
      }
    };

    verifyAuthentication();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  if (!isInitialized) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
      >
        <CircularProgress />
      </Box>
    );
  }

  return children;
};

export default AuthProvider;
