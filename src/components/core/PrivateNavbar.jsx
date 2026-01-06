import { useState, useEffect, useRef } from 'react';
import { FaRegUser, FaChevronDown } from 'react-icons/fa';
import {
  MdPowerSettingsNew,
  MdOutlinePassword,
  MdOutlineAccountCircle,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { logOut } from '../../redux/slices/authSlices';
import { logoutApi } from '../../api/authApi';

const PrivateNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const admin = useSelector((state) => state.auth.admin);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Helper to get Page Title from URL
  const getPageTitle = (pathname) => {
    const segment = pathname.split('/').filter(Boolean).pop();
    if (!segment || segment === 'dashboard') return 'Dashboard';
    return segment
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  };

  const handleLogout = async () => {
    try {
      await logoutApi();
      dispatch(logOut());
      navigate('/login');
    } catch (error) {
      dispatch(logOut());
      navigate('/login');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className='sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 h-[72px] px-8 flex justify-between items-center'>
      {/* Page Title */}
      <div>
        <h1 className='text-xl font-bold text-slate-800 tracking-tight'>
          {getPageTitle(location.pathname)}
        </h1>
      </div>

      {/* Right Side Actions */}
      <div className='flex items-center gap-x-6 '>
        {/* Profile Dropdown Container */}
        <div className='relative' ref={dropdownRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className='flex items-center gap-x-3 p-1 pr-3 rounded-full hover:bg-slate-100 transition-all duration-200 border border-transparent hover:border-slate-200 cursor-pointer'
          >
            {/* Avatar Circle */}
            <div className='w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-100 overflow-hidden'>
              {admin?.profileImage ? (
                <img
                  src={admin.profileImage}
                  alt='profile'
                  className='w-full h-full object-cover'
                />
              ) : (
                <FaRegUser size={18} />
              )}
            </div>

            {/* Admin Info (Hidden on small screens) */}
            <div className='hidden md:flex flex-col items-start leading-tight text-left'>
              <span className='text-sm font-semibold text-slate-700'>
                {admin ? `${admin.firstName} ${admin.lastName}` : 'Admin User'}
              </span>
              <span className='text-[11px] text-slate-500 font-medium uppercase tracking-wider'>
                {admin?.role || 'Administrator'}
              </span>
            </div>

            <FaChevronDown
              size={12}
              className={`text-slate-400 transition-transform duration-300 ${
                isProfileOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className='absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in duration-200'>
              {/* Header Info in Dropdown */}
              <div className='px-4 py-3 border-b border-slate-50 mb-1'>
                <p className='text-xs text-slate-400 font-semibold uppercase'>
                  Signed in as
                </p>
                <p className='text-sm font-medium text-slate-800 truncate'>
                  {admin?.email || 'admin@company.com'}
                </p>
              </div>

              <div className='px-2 space-y-1'>
                <button
                  onClick={() => {
                    navigate('/profile');
                    setIsProfileOpen(false);
                  }}
                  className='w-full flex items-center gap-x-3 px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer'
                >
                  <MdOutlineAccountCircle size={20} />
                  My Profile
                </button>

                <button
                  onClick={() => {
                    navigate('/security-settings');
                    setIsProfileOpen(false);
                  }}
                  className='w-full flex items-center gap-x-3 px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer'
                >
                  <MdOutlinePassword size={20} />
                  Security Settings
                </button>
              </div>

              <div className='mt-2 pt-2 border-t border-slate-50 px-2'>
                <button
                  onClick={handleLogout}
                  className='w-full flex items-center gap-x-3 px-3 py-2.5 text-sm font-semibold text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer'
                >
                  <MdPowerSettingsNew size={20} />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
