import { Check, X } from 'lucide-react';

const FriendRequestCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center gap-3 mb-3">
        <img
          src="/sahas_pp.jpg"
          alt="Sahas Weerawarna"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-sm text-black">Sahas Weerawarna sent you a friend request</p>
          <p className="text-xs text-fb-dark-gray mt-1">2 years ago</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 bg-fb-blue text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
          <Check className="w-4 h-4" />
          Confirm
        </button>
        <button className="flex-1 bg-fb-gray text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2">
          <X className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default FriendRequestCard;
