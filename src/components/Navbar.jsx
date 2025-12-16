import { useState } from 'react';
import {
  PhoneIcon,
  UserCircleIcon,
  ChevronDownIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router';

const MAHARASHTRA_CITY_DATA = {
  Mumbai: [
    'Andheri',
    'Bandra',
    'Colaba',
    'Dadar',
    'Juhu',
    'Powai',
    'Vikhroli',
    'Malad',
    'Goregaon',
    'Versova',
  ],
  Pune: [
    'Hinjewadi',
    'Koregaon Park',
    'Viman Nagar',
    'Magarpatta',
    'Shivajinagar',
    'Kothrud',
  ],
  Thane: [
    'Majhiwada',
    'Wagle state',
    'Ghodbunder Road',
    'Kolshet',
    'Bhayandar',
    'Mira Road',
  ],
  NaviMumbai: ['Vashi', 'Nerul', 'Belapur', 'Kharghar', 'Panvel', 'Kamothe'],
  Nashik: ['Gangapur Road', 'Ambad', 'Panchavati', 'Deolali', 'CIDCO'],
};

const INITIAL_LOCALITY_LIMIT = 6;

export default function Navbar() {
  const navigate = useNavigate();
  const [hoverCity, setHoverCity] = useState(null);
  const [clickedCity, setClickedCity] = useState(null);
  const [expandedCities, setExpandedCities] = useState({});

  const handleCityClick = (city) => {
    setClickedCity(clickedCity === city ? null : city);
    setHoverCity(null);
  };

  const toggleExpand = (city) => {
    setExpandedCities((prev) => ({
      ...prev,
      [city]: !prev[city],
    }));
  };

  const isDropdownVisible = (city) =>
    hoverCity === city || clickedCity === city;

  const getDisplayLocalities = (city) => {
    const allLocalities = MAHARASHTRA_CITY_DATA[city] || [];
    const isExpanded = expandedCities[city];

    return isExpanded
      ? allLocalities
      : allLocalities.slice(0, INITIAL_LOCALITY_LIMIT);
  };

  const NavLink = ({ title, subtitle, onClick }) => (
    <div
      onClick={onClick}
      className='flex flex-col cursor-pointer leading-tight py-3 px-6 
                 transition duration-150 hover:bg-gray-50 border-r border-gray-200'
    >
      <span className='font-semibold text-sm text-gray-800'>{title}</span>
      <span className='text-xs text-gray-500 mt-0.5'>{subtitle}</span>
    </div>
  );

  return (
    <nav className='w-full bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-[1400px] mx-auto flex items-center justify-between px-6'>
        <div className='flex items-center'>
          <img
            src='https://static.vecteezy.com/system/resources/previews/024/245/954/non_2x/phone-repair-service-logo-template-free-vector.jpg'
            alt='Logo'
            className='w-20 object-contain cursor-pointer mr-2'
            onClick={() => navigate('/')}
          />
          <NavLink
            title='Become a Member'
            subtitle='Additional 10% off on bookings'
            onClick={() => navigate('/become-member')}
          />
          <NavLink
            title='Fixiez for Business'
            subtitle='Trusted by 500 Shop Vendors and Technician'
            onClick={() => navigate('/fixiez-for-business')}
          />
          <NavLink
            title='List your Shops'
            subtitle='Start earning in 30 mins'
            onClick={() => navigate('/list-your-property')}
          />
        </div>

        {/* RIGHT SECTION */}
        <div className='flex items-center'>
          <div className='flex items-center gap-2 border-r border-gray-200 px-6 py-3 cursor-default'>
            <PhoneIcon className='w-5 h-5 text-red-600' />
            <div className='leading-tight'>
              <p className='font-extrabold text-sm text-gray-900'>
                0124-6201611
              </p>
              <p className='text-xs text-gray-500'>Call us to Book now</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/auth')}
            className='flex items-center gap-1 cursor-pointer font-medium text-gray-700 
                       hover:text-red-500 transition duration-150 px-6 py-3 group'
          >
            <UserCircleIcon className='w-6 h-6 text-gray-600 group-hover:text-red-500 transition duration-150' />
            <span>Login / Signup</span>
          </button>
        </div>
      </div>

      {/* --- Bottom Bar: City Navigation (Expandable) --- */}
      <div className='bg-gray-50 border-y border-gray-200'>
        <div className='max-w-[1400px] mx-auto flex items-center gap-8 px-6 py-2.5 relative'>
          {Object.keys(MAHARASHTRA_CITY_DATA).map((city) => {
            const localities = MAHARASHTRA_CITY_DATA[city];
            const displayedLocalities = getDisplayLocalities(city);
            const isExpanded = expandedCities[city];
            const needsExpandButton =
              localities.length > INITIAL_LOCALITY_LIMIT;

            return (
              <div
                key={city}
                className='relative'
                onMouseEnter={() => setHoverCity(city)}
                onMouseLeave={() => {
                  if (clickedCity !== city) setHoverCity(null);
                }}
              >
                <button
                  onClick={() => handleCityClick(city)}
                  className='flex items-center gap-1 text-sm text-gray-700 font-semibold hover:text-red-600 transition duration-150 cursor-pointer'
                >
                  <MapPinIcon className='w-4 h-4 text-red-500' />
                  {city}
                  <ChevronDownIcon
                    className={`w-4 h-4 ml-0.5 transition duration-200 ${
                      isDropdownVisible(city) ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Dropdown Content */}
                {isDropdownVisible(city) && (
                  <div
                    className='absolute left-0 mt-3 w-64 bg-white rounded-lg border border-gray-100 
                               shadow-xl py-4 px-5 z-50 animate-fadeIn'
                  >
                    <p className='font-bold text-base text-gray-800 border-b border-gray-100 pb-2 mb-3'>
                      Popular Localities
                    </p>

                    <ul className='grid grid-cols-2 gap-y-2 gap-x-4'>
                      {displayedLocalities.map((loc, i) => (
                        <li
                          key={i}
                          onClick={() =>
                            navigate(`/city/${city}/${loc.replace(/\s/g, '-')}`)
                          }
                          className='text-sm text-gray-700 cursor-pointer hover:text-red-600 
                                     transition duration-150 truncate'
                        >
                          {loc}
                        </li>
                      ))}
                    </ul>

                    {/* View All/View Less Button - Toggles Expansion */}
                    {needsExpandButton && (
                      <button
                        onClick={() => toggleExpand(city)}
                        className='mt-4 pt-3 w-full border-t border-gray-100 text-sm font-bold text-red-600 cursor-pointer 
                                         flex items-center justify-between hover:bg-red-50 px-2 py-1 rounded transition duration-150'
                      >
                        <span>
                          {isExpanded
                            ? `View Less of ${city}`
                            : `View All of ${city}`}
                        </span>
                        <ChevronDownIcon
                          className={`w-4 h-4 transition duration-200 ${
                            isExpanded ? 'rotate-180' : '-rotate-90'
                          }`}
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* All Cities Link */}
          <button
            onClick={() => navigate('/all-cities')}
            className='text-sm font-semibold cursor-pointer text-red-600 hover:text-red-700 transition duration-150'
          >
            All Cities in Maharashtra
          </button>
        </div>
      </div>
    </nav>
  );
}
