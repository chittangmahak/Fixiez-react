import React, { useState, useMemo, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router';

// import aihorizon from '../../assets/logo/aih_logo_light.png';

import { GoHistory } from 'react-icons/go';

import { SiGoogleanalytics } from 'react-icons/si';

import { TbBrandGoogleAnalytics } from 'react-icons/tb';

import { IoAnalytics } from 'react-icons/io5';

import { CgFileDocument } from 'react-icons/cg';

import { LuLayoutDashboard, LuBot } from 'react-icons/lu';

// import logo from '../../assets/dcb-logo.png';

import { IoChevronDownOutline, IoChevronForwardOutline } from 'react-icons/io5';

import { IoDocumentsOutline, IoCloudUploadOutline } from 'react-icons/io5';

const MENU = [
  {
    key: 'dashboard',

    title: 'Dashboard',

    icon: <LuLayoutDashboard />,

    to: '/dashboard',
  },

  {
    key: 'documents',

    title: 'Documents',

    icon: <IoDocumentsOutline />,

    subMenu: [
      {
        key: 'upload',

        title: 'Upload',

        icon: <IoCloudUploadOutline />,

        to: '/documents/upload',
      },

      {
        key: 'document-library',

        title: 'Document Library',

        icon: <CgFileDocument />,

        to: '/documents/document-library',
      },
    ],
  },

  {
    key: 'accounts',

    title: 'Account',

    icon: <LuBot />,

    to: '/accounts',
  },

  {
    key: 'token-analysis',

    title: 'Token Analysis',

    icon: <IoAnalytics size={24} />,

    to: '/token-analysis',
  },

  {
    key: 'history',

    title: 'Chat History',

    icon: <GoHistory />,

    to: '/chat-history',
  },
];

export default function SideBar({ onSelect }) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const getInitialOpenKey = () => {
    const foundItem = MENU.find((item) =>
      item.subMenu?.some((child) => child.to === pathname)
    );

    return foundItem ? foundItem.key : null;
  };

  const [openKey, setOpenKey] = useState(getInitialOpenKey);

  const isPathMatch = (to) => {
    if (!to) return false;

    if (to === '/') return pathname === '/';

    return pathname === to;
  };

  const activeInfo = useMemo(() => {
    const parentActiveMap = {};

    MENU.forEach((item) => {
      if (item.subMenu) {
        parentActiveMap[item.key] = item.subMenu.some((c) => isPathMatch(c.to));
      }
    });

    const itemActiveMap = {};

    MENU.forEach((item) => {
      if (!item.subMenu && item.to)
        itemActiveMap[item.key] = isPathMatch(item.to);
    });

    return { parentActiveMap, itemActiveMap };
  }, [pathname]);

  const shouldBeOpen = (item) => item.subMenu && openKey === item.key;

  useEffect(() => {
    const foundItem = MENU.find((item) =>
      item.subMenu?.some((child) => child.to === pathname)
    );

    setOpenKey(foundItem ? foundItem.key : null);
  }, [pathname]);

  const handleParentClick = (item) => {
    if (item.subMenu && item.subMenu.length > 0) {
      if (openKey === item.key) {
        setOpenKey(null);
      } else {
        setOpenKey(item.key);

        const firstChild = item.subMenu[0];

        if (firstChild.to) {
          navigate(firstChild.to);

          onSelect?.(firstChild.key);
        }
      }
    } else if (item.to) {
      navigate(item.to);

      onSelect?.(item.key);
    }
  };

  const handleChildClick = (child) => {
    navigate(child.to);

    onSelect?.(child.key);
  };

  const parentClasses = (active) =>
    `w-full flex items-center justify-between gap-2 rounded-lg px-3 py-2 cursor-pointer transition-colors

    ${
      active
        ? 'bg-blue-100 shadow-sm border-l-4 border-blue-500'
        : 'hover:bg-blue-50'
    }`;

  const childClasses = (active) =>
    `w-full flex items-center justify-start gap-3 text-sm rounded-md px-3 py-2 cursor-pointer transition-colors

     ${
       active
         ? 'bg-blue-100 text-blue-700 font-semibold'
         : 'hover:bg-blue-50 text-gray-700'
     }`;

  //  const iconClasses = (active) => `${active ? size={20} : size = {20}}`

  return (
    <aside className='relative h-screen w-64 bg-gray-50 flex flex-col justify-center items-center shadow-2xl z-50 rounded-r-3xl'>
      <div
        onClick={() => navigate('/')}
        className='flex justify-center items-center m-3  cursor-pointer rounded hover:scale-105 transition-all'
      >
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIA8ADjOfAxpHcxsDQACNe0Yhxl0CdO1QNw&s'
          alt='logo'
          className='w-36 h-20 object-cover object-center rounded-sm '
        />
      </div>

      {/* Menu */}
      <nav className='w-full flex-1 px-3 mt-8 text-base md:text-lg font-albert text-primary-black'>
        <ul className='space-y-2'>
          {MENU.map((item) => {
            const isParentActive = item.subMenu
              ? activeInfo.parentActiveMap[item.key]
              : false;

            const isItemActive = !item.subMenu
              ? activeInfo.itemActiveMap[item.key]
              : false;

            const active = isParentActive || isItemActive;

            return (
              <li key={item.key}>
                <button
                  type='button'
                  onClick={() => handleParentClick(item)}
                  className={parentClasses(active)}
                >
                  <span className='flex items-center gap-3'>
                    <span className='text-xl'>
                      {React.cloneElement(item.icon, {
                        size: active ? 28 : 22,
                      })}
                    </span>

                    <span className='whitespace-nowrap'>{item.title}</span>
                  </span>

                  {item.subMenu && (
                    <span className='text-xs'>
                      {shouldBeOpen(item) ? (
                        <IoChevronDownOutline size={18} />
                      ) : (
                        <IoChevronForwardOutline size={16} />
                      )}
                    </span>
                  )}
                </button>

                {/* Children */}
                {item.subMenu && shouldBeOpen(item) && (
                  <ul className='mt-2 ml-4 space-y-1 border-l border-gray-200'>
                    {item.subMenu.map((child) => {
                      const childActive = isPathMatch(child.to);

                      return (
                        <li key={child.key}>
                          <button
                            type='button'
                            onClick={(e) => {
                              e.stopPropagation();

                              handleChildClick(child);
                            }}
                            className={childClasses(childActive)}
                          >
                            <span className='text-xl'>{child.icon}</span>

                            {child.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
