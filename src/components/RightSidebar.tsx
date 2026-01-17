import { X, Check, ExternalLink, Search, MoreHorizontal, Gift } from 'lucide-react';
import { sponsored, friendRequests } from '../data/mockData';
import { birthdays } from '../data/mockData';

const RightSidebar = () => {
  return (
    <aside className="fixed right-0 top-14 w-80 h-[calc(100vh-3.5rem)] overflow-y-auto bg-white pt-4 px-4">
      {/* Sponsored Section */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-fb-dark-gray mb-3">Sponsored</h3>
        {sponsored.map((ad) => (
          <div key={ad.id} className="mb-4 cursor-pointer hover:opacity-90 transition-opacity">
            <div className="rounded-lg overflow-hidden mb-2">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">{ad.title}</p>
                <div className="flex items-center gap-1 text-xs text-fb-dark-gray">
                  <span>{ad.link}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Friend Requests */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-fb-dark-gray">Friend requests</h3>
          <button className="text-xs text-fb-blue hover:underline">See all</button>
        </div>
        {friendRequests.map((request) => (
          <div key={request.id} className="mb-3">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={request.user.avatar}
                alt={request.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{request.user.name}</p>
                <p className="text-xs text-fb-dark-gray">
                  {request.mutualFriends} mutual friend{request.mutualFriends !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-fb-blue text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-1">
                <Check className="w-4 h-4" />
                Confirm
              </button>
              <button className="flex-1 bg-fb-gray text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-1">
                <X className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Birthdays */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-fb-dark-gray">Birthdays</h3>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Gift className="w-5 h-5 text-fb-blue" />
          <p className="text-sm text-black">
            <span className="font-semibold">{birthdays[0]?.name}</span> and 7 others have their birthdays today.
          </p>
        </div>
      </div>

      {/* Contacts */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-fb-dark-gray">Contacts</h3>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full hover:bg-fb-gray flex items-center justify-center transition-colors">
              <Search className="w-4 h-4 text-gray-600" />
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-fb-gray flex items-center justify-center transition-colors">
              <MoreHorizontal className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { id: '1', name: 'Loshan Ruwanpathirana', avatar: 'https://i.pravatar.cc/150?img=58' },
            { id: '2', name: 'Shehanka Dassanayake', avatar: 'https://i.pravatar.cc/150?img=59' },
            { id: '3', name: 'Sachithra Wijesinghe', avatar: 'https://i.pravatar.cc/150?img=60' },
          ].map((contact) => (
            <div key={contact.id} className="flex items-center gap-2 hover:bg-fb-gray rounded-lg p-2 cursor-pointer">
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-sm text-black font-medium">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
