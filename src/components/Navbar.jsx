import { useState } from 'react';
import {
  GlobeAltIcon,
  PhoneIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';




export default function Navbar() {
  const cityData = {
    Bangalore: ['Koramangala', 'BTM Layout', 'Whitefield'],
    Chennai: ['T Nagar', 'Kodambakkam', 'Anna Nagar'],
    Delhi: [
      'Paharganj',
      'Karol Bagh',
      'Janakpuri',
      'Dwarka, New Delhi',
      'Indira Gandhi International Air...',
      'Mahipalpur',
      'Saket',
      'New Delhi Railway Station',
      'Lajpat Nagar',
      'Mayapuri',
    ],
    Gurgaon: ['Cyber Hub', 'DLF Phase 3', 'Sector 29', 'Udyog Vihar'],
    Hyderabad: ['Gachibowli', 'HiTech City', 'Kukatpally'],
    Kolkata: ['Salt Lake', 'New Town', 'Howrah'],
    Mumbai: ['Andheri', 'Bandra', 'Colaba'],
    Noida: ['Sector 62', 'Sector 18', 'Sector 76'],
    Pune: ['Hinjewadi', 'Koregaon Park', 'Viman Nagar'],
  };

  const [hoverCity, setHoverCity] = useState(null);

  return (
    <div className='w-full shadow-sm  bg-white'>
      <div className='max-w-[1400px] mx-auto flex items-center justify-between px-6'>
        {/* LEFT SECTION */}
        <div className='flex items-center gap-6 '>
          <img
            src='/oyo_logo.png'
            alt='logo'
            className='w-20 object-contain cursor-pointer'
          />

          <div className='flex flex-col cursor-pointer leading-tight border-r border-gray-200 px-6 py-3'>
            <span className='font-medium text-[15px]'>Become a Member</span>
            <span className='text-xs text-gray-500'>
              Additional 10% off on stays
            </span>
          </div>

          <div className='flex flex-col cursor-pointer leading-tight border-r border-gray-200 px-6 py-3'>
            <span className='font-medium text-[15px]'> for Business</span>
            <span className='text-xs text-gray-500'>
              Trusted by 5000 Corporates
            </span>
          </div>

          <div className='flex flex-col cursor-pointer leading-tight border-r border-gray-200 px-6 py-3'>
            <span className='font-medium text-[15px]'>List your property</span>
            <span className='text-xs text-gray-500'>
              Start earning in 30 mins
            </span>
          </div>
        </div>

        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2 cursor-pointer border-r border-gray-200 px-6 py-3'>
            <PhoneIcon className='w-5 h-5 text-gray-700' />
            <div className='leading-tight'>
              <p className='font-semibold text-[15px]'>0124-6201611</p>
              <p className='text-xs text-gray-500 -mt-1'>Call us to Book now</p>
            </div>
          </div>

          <div className='flex items-center gap-1 cursor-pointer hover:bg-gray-100 px-6 py-3 '>
            <UserCircleIcon className='w-6 h-6 text-gray-700' />
            <span className='font-medium'>Login / Signup</span>
          </div>
        </div>
      </div>

      <div className='bg-[#f3f5f7] border-y border-gray-200 '>
        <div className='max-w-[1400px] mx-auto flex items-center gap-10 px-6 py-3 relative'>
          {Object.keys(cityData).map((city) => (
            <div
              key={city}
              className='relative'
              onMouseEnter={() => setHoverCity(city)}
              onMouseLeave={() => setHoverCity(null)}
            >
              <button className='flex items-center gap-1 text-[15px] text-[#333] font-medium hover:text-black'>
                {city}
                <ChevronDownIcon className='w-4 h-4' />
              </button>

              {hoverCity === city && (
                <div
                  className='absolute left-0 mt-2 w-64 bg-white rounded-md 
                  shadow-[0_8px_30px_rgba(0,0,0,0.15)] py-4 px-5 z-50 animate-fadeIn'
                >
                  <p className='font-semibold text-[15px] text-[#333] mb-3'>
                    Popular Localities
                  </p>

                  <ul className='space-y-2'>
                    {cityData[city].map((loc, i) => (
                      <li
                        key={i}
                        className='text-[14px] text-[#333] cursor-pointer hover:text-black'
                      >
                        {loc}
                      </li>
                    ))}

                    <li className='pt-2 text-[15px] font-medium text-[#EE2E24] cursor-pointer flex items-center gap-1'>
                      <span>All of {city}</span>
                      <ChevronDownIcon className='w-4 h-4 -rotate-90' />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}

          <span className='text-[15px] font-medium cursor-pointer'>
            All Cities
          </span>
        </div>
      </div>
    </div>
  );
}
