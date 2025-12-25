import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Paper,
  TextField,
  Button,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Badge,
  Alert,
} from '@mui/material';
import {
  MdCameraAlt,
  MdEdit,
  MdSave,
  MdClose,
  MdVerifiedUser,
} from 'react-icons/md';

const Profile = () => {
  const { admin } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Ref for the hidden file input
  const fileInputRef = useRef(null);

  // Local state for form handling
  const [profileData, setProfileData] = useState({
    firstName: admin?.firstName || '',
    lastName: admin?.lastName || '',
    email: admin?.email || '',
    bio: admin?.bio || 'Administrator',
    phone: admin?.phone || '+91 xxx-xxx-xxxx',
    profileImage: admin?.profileImage || null,
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData({ ...profileData, profileImage: imageUrl });
      setIsEditing(true); // Automatically switch to editing mode when image changes
    }
  };

  const handleUpdate = async () => {
    // Logic for dispatching update profile API would go here
    setSuccessMsg('Profile updated successfully!');
    setIsEditing(false);
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleCancel = () => {
    // Reset to original data
    setProfileData({
      firstName: admin?.firstName || '',
      lastName: admin?.lastName || '',
      email: admin?.email || '',
      bio: admin?.bio || 'Senior Administrator',
      phone: admin?.phone || '+91 xxx-xxx-xxxx',
      profileImage: admin?.profileImage || null,
    });
    setIsEditing(false);
  };

  console.log(admin?.phone);

  return (
    <div className='p-8 bg-[#f8fafc] min-h-[calc(100vh-72px)] flex justify-center'>
      <div className='w-full max-w-4xl'>
        {/* Header Section */}
        <div className='mb-8 flex justify-between items-end'>
          <div>
            <Typography variant='h4' fontWeight='700' color='#1e293b'>
              Account Settings
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              Manage your account details.
            </Typography>
          </div>

          {/* Conditional Rendering for Buttons */}
          {!isEditing ? (
            <Button
              variant='contained'
              startIcon={<MdEdit />}
              onClick={() => setIsEditing(true)}
              sx={{
                borderRadius: '10px',
                textTransform: 'none',
                px: 3,
                backgroundColor: '#2563eb',
              }}
            >
              Edit Profile
            </Button>
          ) : (
            <div className='flex gap-2'>
              <Button
                variant='outlined'
                startIcon={<MdClose />}
                color='inherit'
                onClick={handleCancel}
                sx={{ borderRadius: '10px', textTransform: 'none' }}
              >
                Cancel
              </Button>
              <Button
                variant='contained'
                startIcon={<MdSave />}
                onClick={handleUpdate}
                sx={{
                  borderRadius: '10px',
                  textTransform: 'none',
                  px: 3,
                  backgroundColor: '#2563eb',
                }}
              >
                Save Changes
              </Button>
            </div>
          )}
        </div>

        {successMsg && (
          <Alert severity='success' className='mb-6 rounded-xl'>
            {successMsg}
          </Alert>
        )}

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column: Avatar & Quick Info */}
          <Paper
            elevation={0}
            className='p-8 border border-slate-200 flex flex-col items-center text-center h-fit'
            sx={{ borderRadius: '20px' }}
          >
            {/* Hidden Input File */}
            <input
              type='file'
              ref={fileInputRef}
              onChange={handleImageChange}
              accept='image/*'
              style={{ display: 'none' }}
            />

            <Badge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <IconButton
                  onClick={() => fileInputRef.current.click()} // Trigger file input
                  sx={{
                    bgcolor: '#2563eb',
                    color: 'white',
                    '&:hover': { bgcolor: '#1d4ed8' },
                    border: '4px solid white',
                  }}
                  size='small'
                >
                  <MdCameraAlt size={18} />
                </IconButton>
              }
            >
              <Avatar
                src={profileData.profileImage} // Using local preview state
                sx={{
                  width: 140,
                  height: 140,
                  fontSize: '3rem',
                  bgcolor: '#dbeafe',
                  color: '#2563eb',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                }}
              >
                {profileData.firstName[0] + profileData.lastName[0]}
              </Avatar>
            </Badge>

            <div className='my-5'>
              <div className='flex items-center justify-center gap-1'>
                <Typography variant='h6' fontWeight='700' color='#1e293b'>
                  {profileData.firstName} {profileData.lastName}
                </Typography>
                <MdVerifiedUser className='text-blue-500' />
              </div>
              <Typography
                variant='body2'
                color='textSecondary'
                className='uppercase font-bold tracking-widest text-[10px] bg-slate-100 px-2 py-1 rounded mt-2 inline-block'
              >
                {admin?.role || 'Administrator'}
              </Typography>
            </div>

            <Divider className='w-full my-6' />

            <div className='w-full text-left space-y-4 mt-2'>
              <div>
                <Typography
                  variant='caption'
                  color='textSecondary'
                  className='font-bold uppercase'
                >
                  Email Address
                </Typography>
                <Typography variant='body2' fontWeight='500'>
                  {profileData.email}
                </Typography>
              </div>
              <div>
                <Typography
                  variant='caption'
                  color='textSecondary'
                  className='font-bold uppercase'
                >
                  Phone Number
                </Typography>
                <Typography variant='body2' fontWeight='500'>
                  {profileData.phone}
                </Typography>
              </div>
            </div>
          </Paper>

          {/* Right Column: Form Details */}
          <Paper
            elevation={0}
            className='lg:col-span-2 p-8 border border-slate-200'
            sx={{ borderRadius: '20px' }}
          >
            <Typography
              variant='h6'
              fontWeight='700'
              sx={{ mb: 2, display: 'block', color: '#1e293b' }}
            >
              Personal Information
            </Typography>

            <Box className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <TextField
                label='First Name'
                name='firstName'
                value={profileData.firstName}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              />
              <TextField
                label='Last Name'
                name='lastName'
                value={profileData.lastName}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              />
              <TextField
                label='Email'
                value={profileData.email}
                disabled
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': { borderRadius: '12px' },
                  bgcolor: '#f1f5f9',
                  borderRadius: '12px',
                }}
              />
              <TextField
                label='Phone Number'
                name='phone'
                value={profileData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              />
              <TextField
                label='Bio'
                name='bio'
                value={profileData.bio}
                onChange={handleChange}
                disabled={!isEditing}
                fullWidth
                multiline
                rows={4}
                className='md:col-span-2'
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              />
            </Box>

            {isEditing && (
              <Box className='mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100'>
                <Typography
                  variant='caption'
                  className='flex items-center gap-2 font-medium'
                  sx={{ color: '#92400e' }}
                >
                  <span className='w-2 h-2 bg-amber-500 rounded-full animate-pulse'></span>
                  Note: You are currently in editing mode. Don't forget to save
                  your changes.
                </Typography>
              </Box>
            )}
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Profile;
