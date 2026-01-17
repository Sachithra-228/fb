import { Search, Settings, Gamepad2, Bell, Bookmark, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Game {
  id: string;
  name: string;
  category: string;
  image: string;
  players?: number;
  description?: string;
}

const topPicks: Game[] = [
  {
    id: '1',
    name: 'LUDO World',
    category: 'Board',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
    players: 3,
    description: 'Play with friends',
  },
  {
    id: '2',
    name: 'Texas Holdem Poker',
    category: 'Card',
    image: 'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    name: '8 Ball Pool',
    category: 'Sport',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    name: 'Piece of Cake',
    category: 'Builder',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9c836a?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    name: 'Mergest Kingdom',
    category: 'Builder',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    name: 'Family Farm Journey',
    category: 'Simulation',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
  },
];

const mostPlayed: Game[] = [
  {
    id: '7',
    name: '8 Ball Pool',
    category: 'Sport',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  },
  {
    id: '8',
    name: 'Basketball game',
    category: 'Sport',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
  },
  {
    id: '9',
    name: 'Words game',
    category: 'Puzzle',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
  },
  {
    id: '10',
    name: 'Cooking game',
    category: 'Simulation',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9c836a?w=400&h=300&fit=crop',
  },
  {
    id: '11',
    name: 'Mini Golf FRVR',
    category: 'Sport',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
  },
];

const Gaming = () => {
  return (
    <div className="min-h-screen bg-fb-gray">
      <Navbar />
      <div className="pt-14 flex">
        {/* Left Sidebar */}
        <aside className="w-80 bg-white h-[calc(100vh-3.5rem)] overflow-y-auto p-4 border-r border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-black">Games</h1>
            <button className="w-8 h-8 rounded-full hover:bg-fb-gray flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search games"
                className="w-full pl-10 pr-4 py-2 bg-fb-gray rounded-lg border-none outline-none text-sm"
              />
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <button className="w-full flex items-center gap-3 px-3 py-2 bg-fb-blue text-white rounded-lg font-semibold">
              <Gamepad2 className="w-5 h-5" />
              <span>Play games</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-black">Notifications</span>
            </button>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-600">Your games</h3>
              <button className="text-xs text-fb-blue hover:underline">See all</button>
            </div>
            <p className="text-xs text-gray-500 mb-2">Save a game to Your games to create a shortcut for it here.</p>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
              <Bookmark className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-black">Save games</span>
            </button>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Categories</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
                <Gamepad2 className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-black">All games</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
                <span className="text-xl">🔫</span>
                <span className="text-sm text-black">Action</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
                <span className="text-xl">📖</span>
                <span className="text-sm text-black">Adventure</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
                <span className="text-xl">🕹️</span>
                <span className="text-sm text-black">Arcade</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-fb-gray rounded-lg text-left">
                <span className="text-xl">⚔️</span>
                <span className="text-sm text-black">Battle</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Top picks for you */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-black">Top picks for you</h2>
              <button className="w-8 h-8 rounded-full hover:bg-fb-gray flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {topPicks.map((game) => (
                <div key={game.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="relative">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                      <p className="text-white text-xs font-semibold truncate">{game.name}</p>
                    </div>
                  </div>
                  <div className="p-2">
                    {game.description && (
                      <p className="text-xs text-gray-600 mb-1">{game.description}</p>
                    )}
                    {game.players && (
                      <div className="flex items-center gap-1 mb-1">
                        {Array.from({ length: Math.min(game.players, 3) }).map((_, i) => (
                          <div key={i} className="w-4 h-4 rounded-full bg-blue-500 border border-white -ml-1 first:ml-0"></div>
                        ))}
                      </div>
                    )}
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{game.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Most-played games */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-black">Most-played games</h2>
              <button className="w-8 h-8 rounded-full hover:bg-fb-gray flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {mostPlayed.map((game) => (
                <div key={game.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <p className="text-sm font-semibold text-black truncate">{game.name}</p>
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

export default Gaming;
