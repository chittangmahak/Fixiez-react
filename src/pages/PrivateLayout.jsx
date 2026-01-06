import PrivateNavbar from '../components/core/PrivateNavbar';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router';

const PrivateLayout = () => {
  return (
    <div className='flex h-screen'>
      <SideBar />

      <div className='flex flex-col flex-grow'>
        <PrivateNavbar />
        <div className='h-full overflow-y-auto bg-gray-50'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
