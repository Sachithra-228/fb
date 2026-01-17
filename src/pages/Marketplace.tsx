import { Search, Settings, Home, Bell, Mail, Shield, ShoppingBag, Tag, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Listing {
  id: string;
  image: string;
  price: string;
  title: string;
  location: string;
  justListed?: boolean;
}

const listings: Listing[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    price: 'LKR 74,000',
    title: 'Iphone 15',
    location: 'Kurunegala',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=300&fit=crop',
    price: 'LKR 690,000',
    title: 'Yamaha R15',
    location: 'Colombo, Sri Lanka',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    price: 'LKR 80,000',
    title: 'Gocart',
    location: 'Negombo',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop',
    price: 'LKR 60,000',
    title: 'Nikon D 5300 Camera',
    location: 'Kirindiwela',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&h=300&fit=crop',
    price: 'LKR 45,000',
    title: 'Honda Scooter',
    location: 'Ganemulla',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
    price: 'LKR 2,500,000',
    title: 'Mitsubishi Lancer',
    location: 'Colombo',
    justListed: true,
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop',
    price: 'LKR 1,800,000',
    title: 'Vintage Car',
    location: 'Kandy',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop',
    price: 'LKR 2,500',
    title: 'Teeth Whitening Product',
    location: 'Colombo',
  },
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-fb-gray">
      <Navbar />
      <div className="pt-14 flex">
        {/* Left Sidebar */}
        <aside className="w-80 bg-white h-[calc(100vh-3.5rem)] overflow-y-auto p-4 border-r border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-black">Marketplace</h1>
            <button className="w-8 h-8 rounded-full hover:bg-fb-gray flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Marketplace"
                className="w-full pl-10 pr-4 py-2 bg-fb-gray rounded-lg border-none outline-none text-sm"
              />
            </div>
          </div>

          <div className="space-y-1 mb-4">
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
              <Home className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-black">Browse all</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-black">Notifications</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-black">Inbox</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
              <Shield className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-black">Marketplace access</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-black">Buying</span>
              </div>
              <span className="text-gray-400">›</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left justify-between">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-black">Selling</span>
              </div>
              <span className="text-gray-400">›</span>
            </button>
          </div>

          <button className="w-full bg-fb-blue text-white py-2 rounded-lg font-semibold mb-4 hover:bg-blue-600 transition-colors">
            + Create new listing
          </button>

          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm text-fb-blue hover:underline cursor-pointer mb-2">
              <MapPin className="w-4 h-4" />
              <span>Ganemulla, Sri Lanka · Within 65 km</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Categories</h3>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
              <span className="text-2xl">🚗</span>
              <span className="text-sm text-black">Vehicles</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Galahitiyawa South · 65 km</span>
            </div>
            <h2 className="text-xl font-bold text-black mb-4">Today's picks</h2>
            <div className="grid grid-cols-4 gap-4">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="relative">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-48 object-cover"
                    />
                    {listing.justListed && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        Just listed
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-black mb-1">{listing.price}</p>
                    <p className="text-sm text-gray-700 mb-1 line-clamp-2">{listing.title}</p>
                    <p className="text-xs text-gray-500">{listing.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Marketplace;
