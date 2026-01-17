import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Home, Video, Store, Gamepad2, MessageCircle, Bell, Grid3x3, UsersRound, ChevronDown } from 'lucide-react';
import { currentUser } from '../data/mockData';
import NotificationsDropdown from './NotificationsDropdown';
import SearchDropdown from './SearchDropdown';

interface NavbarProps {
  onFriendRequestClick?: (userName: string, userAvatar: string, time: string) => void;
}

const Navbar = ({ onFriendRequestClick }: NavbarProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false);
      }
    };

    if (showSearchDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchDropdown]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();
    // Check if query contains "sahas" or "edirisinghe"
    if (query.includes('sahas') || query.includes('weerawarna') || query.includes('edirisinghe') || query === 'sahas') {
      navigate('/profile/sahas-weerawarna');
      setSearchQuery('');
      setShowSearchDropdown(false);
      return;
    }
    if (query.includes('nikini') || query.includes('weerasinghe')) {
      navigate('/profile/nikini-weerasinghe');
      setSearchQuery('');
      setShowSearchDropdown(false);
      return;
    }
    // If no match, you can add more search logic here
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(e as any);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSearchDropdown(e.target.value.length > 0);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50 flex items-center px-4">
      <div className="w-full max-w-7xl mx-auto flex items-center relative">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div 
            onClick={handleLogoClick}
            className="w-10 h-10 rounded-full cursor-pointer flex-shrink-0 bg-fb-blue flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.879V12.89H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.879C16.343 19.129 20 14.99 20 10C20 4.477 15.523 0 10 0Z" fill="white"/>
            </svg>
          </div>
          <div ref={searchRef} className="hidden md:block relative flex-1 max-w-xs ml-2">
            <form onSubmit={handleSearch} className="flex items-center bg-fb-gray rounded-full px-4 py-2 gap-2">
              <Search className="w-5 h-5 text-fb-dark-gray flex-shrink-0" />
              <input
                type="text"
                placeholder="Search Facebook"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                onFocus={() => searchQuery && setShowSearchDropdown(true)}
                className="bg-transparent border-none outline-none flex-1 text-sm text-black placeholder-gray-500 min-w-0"
                aria-label="Search Facebook"
              />
            </form>
            <SearchDropdown
              query={searchQuery}
              isOpen={showSearchDropdown}
              onClose={() => setShowSearchDropdown(false)}
            />
          </div>
        </div>

        {/* Center: Navigation Icons */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => navigate('/')}
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors relative"
            aria-label="Home"
          >
            <Home className={`w-6 h-6 ${location.pathname === '/' ? 'text-fb-blue' : 'text-fb-dark-gray'}`} />
            {location.pathname === '/' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-fb-blue rounded-t-full"></div>
            )}
          </button>
          <button
            onClick={() => navigate('/reels')}
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors relative"
            aria-label="Reels"
          >
            <Video className={`w-6 h-6 ${location.pathname === '/reels' ? 'text-fb-blue' : 'text-fb-dark-gray'}`} />
            {location.pathname === '/reels' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-fb-blue rounded-t-full"></div>
            )}
          </button>
          <button
            onClick={() => navigate('/marketplace')}
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors relative"
            aria-label="Marketplace"
          >
            <Store className={`w-6 h-6 ${location.pathname === '/marketplace' ? 'text-fb-blue' : 'text-fb-dark-gray'}`} />
            {location.pathname === '/marketplace' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-fb-blue rounded-t-full"></div>
            )}
          </button>
          <button
            onClick={() => navigate('/groups')}
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors relative"
            aria-label="Groups"
          >
            <UsersRound className={`w-6 h-6 ${location.pathname === '/groups' ? 'text-fb-blue' : 'text-fb-dark-gray'}`} />
            {location.pathname === '/groups' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-fb-blue rounded-t-full"></div>
            )}
          </button>
          <button
            onClick={() => navigate('/gaming')}
            className="px-8 lg:px-12 py-2 hover:bg-fb-gray rounded-lg transition-colors relative"
            aria-label="Gaming"
          >
            <Gamepad2 className={`w-6 h-6 ${location.pathname === '/gaming' ? 'text-fb-blue' : 'text-fb-dark-gray'}`} />
            {location.pathname === '/gaming' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-fb-blue rounded-t-full"></div>
            )}
          </button>
        </div>

        {/* Right: Icons + Profile */}
        <div className="flex items-center gap-2 absolute right-4 flex-shrink-0">
          <button
            className="w-10 h-10 rounded-full bg-fb-gray hover:bg-gray-300 flex items-center justify-center transition-colors"
            aria-label="Menu"
          >
            <Grid3x3 className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-fb-gray hover:bg-gray-300 flex items-center justify-center transition-colors relative"
            aria-label="Messenger"
          >
            <MessageCircle className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-full bg-fb-gray hover:bg-gray-300 flex items-center justify-center transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">7</span>
            </button>
            <NotificationsDropdown
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
              onFriendRequestClick={onFriendRequestClick}
            />
          </div>
          <button
            className="w-10 h-10 rounded-full overflow-hidden hover:opacity-90 transition-opacity flex items-center justify-center relative group"
            aria-label="Profile"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-full h-full object-cover"
            />
            <ChevronDown className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full text-gray-600 border border-gray-300" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
