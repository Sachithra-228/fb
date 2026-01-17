import { currentUser } from '../../data/mockData';
import { Image, Video, Film } from 'lucide-react';

const Composer = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1 flex items-center gap-2">
          <input
            type="text"
            placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
            className="flex-1 bg-fb-gray rounded-full px-4 py-2 text-sm outline-none text-black"
            aria-label="Create post"
          />
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full hover:bg-fb-gray flex items-center justify-center transition-colors" aria-label="Live video">
              <Video className="w-5 h-5 text-red-500" />
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-fb-gray flex items-center justify-center transition-colors" aria-label="Photo/video">
              <Image className="w-5 h-5 text-green-500" />
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-fb-gray flex items-center justify-center transition-colors" aria-label="Reels">
              <Film className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Composer;
