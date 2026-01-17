import { ThumbsUp, MessageCircle, Share2, MoreVertical, Music } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Reel {
  id: string;
  user: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  video: string;
  audio: string;
  likes: number;
  comments: number;
  shares: number;
}

const reels: Reel[] = [
  {
    id: '1',
    user: { name: 'Chris Finck', avatar: 'https://i.pravatar.cc/150?img=61', verified: true },
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    audio: 'Chris Finck - Original audio',
    likes: 739000,
    comments: 3400,
    shares: 6500,
  },
  {
    id: '2',
    user: { name: 'Kamalini Perera', avatar: 'https://i.pravatar.cc/150?img=47' },
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    audio: 'Kamalini Perera - Original audio',
    likes: 125000,
    comments: 890,
    shares: 1200,
  },
  {
    id: '3',
    user: { name: 'Sachini Navodya', avatar: 'https://i.pravatar.cc/150?img=48' },
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    audio: 'Sachini Navodya - Original audio',
    likes: 89000,
    comments: 567,
    shares: 890,
  },
  {
    id: '4',
    user: { name: 'Chathurika Wijesinghe', avatar: 'https://i.pravatar.cc/150?img=49' },
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    audio: 'Chathurika Wijesinghe - Original audio',
    likes: 156000,
    comments: 1200,
    shares: 2100,
  },
  {
    id: '5',
    user: { name: 'Oshi Madusha', avatar: 'https://i.pravatar.cc/150?img=50' },
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    audio: 'Oshi Madusha - Original audio',
    likes: 98000,
    comments: 756,
    shares: 1100,
  },
];

const Reels = () => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-14 flex justify-center">
        <div className="w-full max-w-md h-[calc(100vh-3.5rem)] relative overflow-hidden">
          {/* Reels Label */}
          <div className="absolute top-4 left-4 z-10 bg-black/50 rounded-full px-3 py-1">
            <span className="text-white text-sm font-semibold">Reels</span>
          </div>

          {/* Video Container */}
          <div className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="h-full w-full snap-start relative flex items-center justify-center flex-shrink-0"
              >
                <video
                  src={reel.video}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  autoPlay
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex">
                  {/* Left Side - User Info */}
                  <div className="absolute bottom-0 left-4 mb-20 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={reel.user.avatar}
                        alt={reel.user.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold text-sm">{reel.user.name}</span>
                          {reel.user.verified && (
                            <span className="text-blue-400 text-xs">✓</span>
                          )}
                        </div>
                        <button className="text-white text-xs hover:underline">Follow</button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Music className="w-4 h-4" />
                      <span>{reel.audio}</span>
                    </div>
                  </div>

                  {/* Right Side - Actions */}
                  <div className="absolute bottom-0 right-4 mb-20 flex flex-col gap-6 items-center">
                    <div className="flex flex-col items-center gap-2">
                      <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                        <ThumbsUp className="w-6 h-6 text-white" />
                      </button>
                      <span className="text-white text-xs font-semibold">{formatNumber(reel.likes)}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </button>
                      <span className="text-white text-xs font-semibold">{formatNumber(reel.comments)}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Share2 className="w-6 h-6 text-white" />
                      </button>
                      <span className="text-white text-xs font-semibold">{formatNumber(reel.shares)}</span>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <MoreVertical className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reels;
