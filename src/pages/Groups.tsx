import { Search, Plus } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Group {
  id: string;
  name: string;
  members: string;
  image: string;
  description?: string;
}

const groups: Group[] = [
  {
    id: '1',
    name: 'Sri Lanka Tech Community',
    members: '12.5K members',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    description: 'A community for tech enthusiasts in Sri Lanka',
  },
  {
    id: '2',
    name: 'Colombo Food Lovers',
    members: '8.3K members',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9c836a?w=400&h=300&fit=crop',
    description: 'Share your favorite food spots in Colombo',
  },
  {
    id: '3',
    name: 'Kandy Photography Club',
    members: '5.2K members',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop',
    description: 'Photography enthusiasts in Kandy',
  },
  {
    id: '4',
    name: 'Galle Travelers',
    members: '6.8K members',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    description: 'Explore Galle and surrounding areas',
  },
];

const Groups = () => {
  return (
    <div className="min-h-screen bg-fb-gray">
      <Navbar />
      <div className="pt-14">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-black">Groups</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-fb-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              <Plus className="w-5 h-5" />
              Create Group
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search groups"
                className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-200 outline-none text-sm"
              />
            </div>
          </div>

          {/* Groups Grid */}
          <div className="grid grid-cols-3 gap-4">
            {groups.map((group) => (
              <div key={group.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-black mb-1">{group.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{group.members}</p>
                  {group.description && (
                    <p className="text-sm text-gray-500 line-clamp-2">{group.description}</p>
                  )}
                  <button className="mt-3 w-full bg-fb-blue text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    Join Group
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
