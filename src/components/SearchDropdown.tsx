import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { searchableUsers } from '../data/searchData';

interface SearchDropdownProps {
  query: string;
  isOpen: boolean;
  onClose: () => void;
}

const SearchDropdown = ({ query, isOpen, onClose }: SearchDropdownProps) => {
  const navigate = useNavigate();

  if (!isOpen || !query.trim()) return null;

  const filteredUsers = searchableUsers.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 8);

  const handleUserClick = (user: { name: string; avatar: string }) => {
    const username = user.name.toLowerCase().replace(/\s+/g, '-');
    if (username === 'nikini-weerasinghe') {
      navigate(`/profile/${username}`);
    } else if (username.includes('sahas') || username.includes('weerawarna') || username.includes('edirisinghe')) {
      navigate('/profile/sahas-weerawarna');
    } else {
      navigate(`/profile/${username}`);
    }
    onClose();
  };

  return (
    <div className="absolute top-full left-0 w-full bg-white rounded-lg shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50">
      {filteredUsers.length > 0 ? (
        <div className="p-2">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
            People
          </div>
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => handleUserClick(user)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg cursor-pointer"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-black">{user.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-gray-500 text-sm">
          No results found
        </div>
      )}
      
      {query && (
        <div className="border-t border-gray-200 p-2">
          <button
            onClick={() => {
              if (query.toLowerCase().includes('sahas') || query.toLowerCase().includes('weerawarna') || query.toLowerCase().includes('edirisinghe')) {
                navigate('/profile/sahas-weerawarna');
              } else if (query.toLowerCase().includes('nikini')) {
                navigate('/profile/nikini-weerasinghe');
              }
              onClose();
            }}
            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg cursor-pointer"
          >
            <Search className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-black">Search for "{query}"</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
