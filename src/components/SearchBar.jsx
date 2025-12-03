import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import { MdOutlineShareLocation } from 'react-icons/md';
import { MdOutlineMyLocation } from 'react-icons/md';

export default function SearchBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState(null);

  const openPopover = (event, popType) => {
    setAnchorEl(event.currentTarget);
    setType(popType);
  };

  const closePopover = () => {
    setAnchorEl(null);
    setType(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className='w-full flex flex-col justify-center items-center py-16 px-4 gap-6 bg-[#5d5d5d]'>
      <div className='text-4xl font-inter text-gray-100'>
        Over 500+ Vendors across 5+ city
      </div>
      <div className='flex bg-white shadow-xl rounded-sm w-auto overflow-hidden'>
        <div
          className='flex items-center px-6 py-2 gap-x-10 border-r border-gray-200 w-full hover:bg-gray-50 cursor-pointer'
          onClick={(e) => openPopover(e, 'location')}
        >
          <div className='flex justify-center items-center'>
            <LocationOnOutlinedIcon className='text-gray-600 mr-3' />
            <input placeholder='Search by city' className='py-3 w-full' />
          </div>

          <button className='flex items-center ml-3 px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 cursor-pointer'>
            <MdOutlineMyLocation className='mr-1' size={24} />
            Near me
          </button>
        </div>

        <button className='m-4 py-1.5 px-10 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full font-semibold text-[15px] cursor-pointer'>
          Search
        </button>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='p-5 w-[300px]'>
          {type === 'location' && (
            <>
              <p className='font-semibold mb-3'>Popular Cities</p>
              <ul className='space-y-2 text-gray-700'>
                <li className='hover:text-black cursor-pointer'>Delhi</li>
                <li className='hover:text-black cursor-pointer'>Mumbai</li>
                <li className='hover:text-black cursor-pointer'>Bangalore</li>
                <li className='hover:text-black cursor-pointer'>Hyderabad</li>
                <li className='hover:text-black cursor-pointer'>Kolkata</li>
              </ul>
            </>
          )}

          {type === 'date' && (
            <p className='text-gray-700'>📅 Date selector can be added here</p>
          )}

          {type === 'guests' && (
            <p className='text-gray-700'>👤 Guests selector coming soon</p>
          )}
        </div>
      </Popover>
    </div>
  );
}
