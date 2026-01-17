import { useRef, useEffect } from 'react';
import { X, Users, ThumbsUp, Star, Flag, Cake, UserPlus } from 'lucide-react';
import { notifications } from '../data/mockData';

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onFriendRequestClick?: (userName: string, userAvatar: string, time: string) => void;
}

const NotificationsDropdown = ({ isOpen, onClose, onFriendRequestClick }: NotificationsDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'birthday':
        return <Cake className="w-5 h-5 text-pink-500" />;
      case 'group':
        return <Users className="w-5 h-5 text-fb-blue" />;
      case 'poke':
        return <ThumbsUp className="w-5 h-5 text-fb-blue" />;
      case 'event':
        return <Star className="w-5 h-5 text-red-500" />;
      case 'invitation':
        return <Flag className="w-5 h-5 text-orange-500" />;
      case 'friend_request':
        return <UserPlus className="w-5 h-5 text-fb-blue" />;
      default:
        return <Users className="w-5 h-5 text-fb-blue" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full right-4 mt-2 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-[500px] overflow-y-auto z-50 scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Notifications</h2>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full hover:bg-fb-gray flex items-center justify-center transition-colors"
          aria-label="Close notifications"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="px-4 py-2 border-b border-gray-200 flex gap-2">
        <button className="px-4 py-2 bg-fb-blue text-white rounded-lg text-sm font-semibold">
          All
        </button>
        <button className="px-4 py-2 text-gray-600 rounded-lg text-sm font-semibold hover:bg-fb-gray">
          Unread
        </button>
      </div>

      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-700">New</h3>
          <button className="text-xs text-fb-blue hover:underline">See all</button>
        </div>

        <div className="space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => {
                if (notification.type === 'friend_request' && notification.user && onFriendRequestClick) {
                  onFriendRequestClick(notification.user.name, notification.user.avatar, notification.time);
                }
              }}
              className="flex items-start gap-3 p-3 hover:bg-fb-gray rounded-lg cursor-pointer relative transition-colors"
            >
              <div className="relative flex-shrink-0">
                {notification.user ? (
                  <img
                    src={notification.user.avatar}
                    alt={notification.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-fb-gray flex items-center justify-center">
                    {getIcon(notification.type)}
                  </div>
                )}
                {notification.type !== 'birthday' && notification.user && (
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                    <div className="w-5 h-5 rounded-full bg-fb-blue flex items-center justify-center">
                      {getIcon(notification.type)}
                    </div>
                  </div>
                )}
                {notification.type === 'birthday' && (
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                    <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
                      <Cake className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm text-black leading-relaxed font-medium">{notification.text}</p>
                <p className="text-xs text-gray-500 mt-1.5">{notification.time}</p>
              </div>

              {notification.isUnread && (
                <div className="w-2 h-2 bg-fb-blue rounded-full flex-shrink-0 mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-3 text-center">
        <button className="text-sm text-fb-blue font-semibold hover:underline">
          See all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsDropdown;
