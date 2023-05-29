import { signOut } from 'next-auth/react';
import { BiLogOut,BiDonateHeart } from 'react-icons/bi';
import { BsHouseFill, BsBellFill,BsFillCalendarFill,BsPeopleFill } from 'react-icons/bs';
import { FaUser,FaShoppingBag,FaBlogger,FaBroom } from 'react-icons/fa';

import useCurrentUser from '@/hooks/useCurrentUser';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarShareButton from './SidebarShareButton';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/',
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
    {
      icon: FaBroom,
      label: 'Clean Up',
      href: 'https://kartik-wadhwa.github.io/cleanup/',
      auth: true,
    },
    {
      icon: BiDonateHeart,
      label: 'Donate',
      href: 'https://eloquent-starburst-83ab1f.netlify.app/',
      auth: true,
    },
    {
      icon: BsFillCalendarFill,
      label: 'Live Campaigns',
      href:'https://stately-brioche-4cc6c9.netlify.app',
      auth: true,
    },
    {
      icon: BsPeopleFill,
      label: 'NGO Connect',
      href:'https://luxury-trifle-ad2fe0.netlify.app/',
      auth: true,
    },
    {
      icon: FaShoppingBag,
      label: 'MarketPlace',
      href:"https://villageecommerce.netlify.app/",
      auth: true,
    },
    {
      icon: FaBlogger,
      label: 'Blog',
      href:'https://roaring-tiramisu-7fda51.netlify.app',
    },
  ]

  return (
    <div className="bg-white col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            <SidebarLogo />
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                alert={item.alert}
                auth={item.auth}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}
            {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
            <SidebarShareButton />
          </div>
        </div>
      </div>
  )
};

export default Sidebar;
