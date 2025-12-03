import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

const Signup = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation: Only letters allowed
    const nameRegex = /^[A-Z a-z]+$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = 'only character allowed';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = 'only character allowed';
    }

    // Email validation
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email =
        'Please enter a valid email address (e.g., @gmail.com, @outlook.com, @yahoo.com).';
    }

    // Phone Number Validation (10 digits only)
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number';
    }

    // Password Validation
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // "Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 8 characters long.";

    const passwordRegex = /^.{6,}$/;
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 6 digits';
    }

    // Confirm Password Validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('register form', formData);
      alert('Signup Successfully');

      setErrors('');
      togglePanel();

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        gender: '',
      });
    }
  };

  return (
    <div>
      <h1 className='text-lg font-bold text-center pb-5 pt-5'>Register</h1>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div className='flex justify-between items-center space-x-3'>
          <TextField
            fullWidth
            label='First Name'
            name='firstName'
            value={formData.firstName}
            required
            onChange={handleChange}
            placeholder='Enter Your First Name'
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            fullWidth
            label='Last Name'
            name='lastName'
            value={formData.lastName}
            required
            onChange={handleChange}
            placeholder='Enter Your Last Name'
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </div>
        <div>
          <TextField
            fullWidth
            label='Email'
            name='email'
            type='email'
            required
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Your Email'
            error={!!errors.email}
            helperText={errors.email}
          />
        </div>
        <div className='flex justify-center items-center space-x-3'>
          <TextField
            fullWidth
            label='Phone Number'
            name='phoneNumber'
            type='tel'
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder='Enter Your Phone Number'
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
          <FormControl fullWidth error={!!errors.gender}>
            <TextField
              // id="outlined-select-currency"
              select
              label='Gender'
              // defaultValue="Gender"
              name='gender'
              required
              value={formData.gender}
              onChange={handleChange}
              placeholder='Select Your Gender'
              // helperText="Please select your currency"
            >
              {/* <Select
              name="gender"
              value={formData.gender}
              required
              onChange={handleChange}
            > */}
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='other'>Other</MenuItem>
              {/* </Select> */}
            </TextField>
          </FormControl>
        </div>

        <div className='flex justify-between items-center space-x-3'>
          <TextField
            fullWidth
            label='Password'
            name='password'
            type='password'
            required
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter Your Password'
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            fullWidth
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='Confirm Your Password'
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        </div>

        <Button
          fullWidth
          className='custom-btn'
          type='submit'
          variant='contained'
          sx={{ padding: '0.9rem' }}
        >
          Register
        </Button>
      </form>
      <div className='flex items-center gap-2 py-5 justify-center'>
        <span>Already have an account?</span>
        <Button onClick={togglePanel}>Log-in</Button>
      </div>
    </div>
  );
};

export default Signup;
