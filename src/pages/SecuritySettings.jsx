import { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Divider,
  InputAdornment,
  IconButton,
  LinearProgress,
  Stack,
} from '@mui/material';
import {
  MdOutlineSecurity,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdLockOutline,
  MdCheckCircleOutline,
} from 'react-icons/md';

const SecuritySettings = () => {
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleToggleVisibility = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  // Simple password strength calculation
  const calculateStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length > 7) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const strength = calculateStrength(passwords.newPassword);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setErrorMsg('New passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      // API Call logic here: await updatePasswordApi(passwords);
      setSuccessMsg(
        'Security settings updated. Password changed successfully.'
      );
      setPasswords({ oldPassword: '', newPassword: '', confirmPassword: '' });
      setTimeout(() => setSuccessMsg(''), 5000);
    } catch (err) {
      setErrorMsg('Failed to update password. Please check your old password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-8 bg-[#f8fafc] min-h-[calc(100vh-72px)] flex justify-center'>
      <div className='w-full max-w-2xl'>
        {/* Header */}
        <div className='mb-8'>
          <Typography variant='h4' fontWeight='700' color='#1e293b'>
            Security Settings
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Protect your account by using a strong password.
          </Typography>
        </div>

        {successMsg && (
          <Alert
            severity='success'
            className='mb-6 rounded-xl animate-in fade-in'
          >
            {successMsg}
          </Alert>
        )}
        {errorMsg && (
          <Alert
            severity='error'
            className='mb-6 rounded-xl animate-in slide-in-from-top-2'
          >
            {errorMsg}
          </Alert>
        )}

        <Paper
          elevation={0}
          className='p-8 border border-slate-200'
          sx={{ borderRadius: '24px' }}
        >
          <div className='flex items-center gap-3 mb-8 text-blue-600'>
            <div className='p-2 bg-blue-50 rounded-lg'>
              <MdOutlineSecurity size={24} />
            </div>
            <Typography variant='h6' fontWeight='700' color='#1e293b'>
              Change Password
            </Typography>
          </div>

          <form onSubmit={handleUpdatePassword}>
            <Stack spacing={4}>
              {/* Old Password */}
              <TextField
                fullWidth
                label='Current Password'
                name='oldPassword'
                type={showPasswords.old ? 'text' : 'password'}
                value={passwords.oldPassword}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MdLockOutline />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <IconButton
                      onClick={() => handleToggleVisibility('old')}
                      edge='end'
                    >
                      {showPasswords.old ? (
                        <MdOutlineVisibilityOff />
                      ) : (
                        <MdOutlineVisibility />
                      )}
                    </IconButton>
                  ),
                }}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              />

              <Divider />

              {/* New Password */}
              <Box>
                <TextField
                  fullWidth
                  label='New Password'
                  name='newPassword'
                  type={showPasswords.new ? 'text' : 'password'}
                  value={passwords.newPassword}
                  onChange={handleChange}
                  required
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <MdLockOutline />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <IconButton
                        onClick={() => handleToggleVisibility('new')}
                        edge='end'
                      >
                        {showPasswords.new ? (
                          <MdOutlineVisibilityOff />
                        ) : (
                          <MdOutlineVisibility />
                        )}
                      </IconButton>
                    ),
                  }}
                />

                {/* Password Strength Indicator */}
                {passwords.newPassword && (
                  <Box className='mt-3 px-1'>
                    <div className='flex justify-between mb-1'>
                      <Typography
                        variant='caption'
                        color='textSecondary'
                        fontWeight='600'
                      >
                        Password Strength
                      </Typography>
                      <Typography
                        variant='caption'
                        color={strength < 50 ? 'error' : 'success'}
                        fontWeight='700'
                      >
                        {strength <= 25 && 'Weak'}
                        {strength === 50 && 'Fair'}
                        {strength === 75 && 'Good'}
                        {strength === 100 && 'Excellent'}
                      </Typography>
                    </div>
                    <LinearProgress
                      variant='determinate'
                      value={strength}
                      color={
                        strength <= 25
                          ? 'error'
                          : strength <= 50
                          ? 'warning'
                          : 'success'
                      }
                      sx={{ height: 6, borderRadius: 3, bgcolor: '#f1f5f9' }}
                    />
                  </Box>
                )}
              </Box>

              {/* Confirm Password */}
              <TextField
                fullWidth
                label='Confirm New Password'
                name='confirmPassword'
                type={showPasswords.confirm ? 'text' : 'password'}
                value={passwords.confirmPassword}
                onChange={handleChange}
                required
                error={
                  passwords.confirmPassword !== '' &&
                  passwords.newPassword !== passwords.confirmPassword
                }
                helperText={
                  passwords.confirmPassword !== '' &&
                  passwords.newPassword !== passwords.confirmPassword
                    ? 'Passwords do not match'
                    : ''
                }
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MdLockOutline />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <IconButton
                      onClick={() => handleToggleVisibility('confirm')}
                      edge='end'
                    >
                      {showPasswords.confirm ? (
                        <MdOutlineVisibilityOff />
                      ) : (
                        <MdOutlineVisibility />
                      )}
                    </IconButton>
                  ),
                }}
              />

              <Box className='pt-4'>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  disabled={loading || strength < 50}
                  sx={{
                    py: 1.5,
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    backgroundColor: '#2563eb',
                    '&:hover': { backgroundColor: '#1d4ed8' },
                    boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
                  }}
                >
                  {loading ? 'Updating Security...' : 'Update Password'}
                </Button>

                <Box className='mt-6 p-4 bg-slate-50 rounded-xl flex gap-3'>
                  <MdCheckCircleOutline className='text-slate-400 mt-0.5' />
                  <Typography variant='caption' color='textSecondary'>
                    Hint: Use 8+ characters with a mix of letters, numbers, and
                    symbols for maximum security.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default SecuritySettings;
