import { useNavigate } from 'react-router-dom';
import { Sparkles, Users, Briefcase, Clock, Bookmark, UsersRound, Video, ChevronDown } from 'lucide-react';
import { currentUser, menuItems, shortcuts } from '../data/mockData';

const iconMap: Record<string, any> = {
  sparkles: Sparkles,
  users: Users,
  briefcase: Briefcase,
  clock: Clock,
  bookmark: Bookmark,
  'users-round': UsersRound,
  video: Video,
  'chevron-down': ChevronDown,
};

const LeftSidebar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile/nikini-weerasinghe');
  };

  return (
    <aside className="hidden md:block fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] overflow-y-auto bg-white pt-4 px-2">
      {/* Profile Row */}
      <div 
        onClick={handleProfileClick}
        className="flex items-center gap-3 px-2 py-2 hover:bg-fb-gray rounded-lg cursor-pointer mb-1"
      >
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w-9 h-9 rounded-full object-cover"
        />
        <span className="font-semibold text-sm text-black">{currentUser.name}</span>
      </div>

      {/* Menu Items */}
      <div className="mt-2">
        {menuItems.map((item) => {
          const Icon = iconMap[item.icon] || Users;
          return (
            <div
              key={item.id}
              className="flex items-center gap-3 px-2 py-2 hover:bg-fb-gray rounded-lg cursor-pointer mb-1"
            >
              <Icon className="w-7 h-7 text-fb-blue" />
              <span className="text-sm text-black">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-2"></div>

      {/* Your Shortcuts */}
      <div className="px-2 py-2">
        <h3 className="text-xs font-semibold text-fb-dark-gray mb-2 px-2">Your shortcuts</h3>
        {shortcuts.map((shortcut) => (
          <div
            key={shortcut.id}
            className="flex items-center gap-3 px-2 py-2 hover:bg-fb-gray rounded-lg cursor-pointer mb-1"
          >
            <img
              src={shortcut.image}
              alt={shortcut.name}
              className="w-9 h-9 rounded object-cover"
            />
            <span className="text-sm text-black">{shortcut.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LeftSidebar;
