import { useParams } from 'react-router-dom';
import { Briefcase, GraduationCap, MapPin, Home, Heart, Filter, BarChart3, Pencil, MoreVertical, List, Grid, MessageCircle, Check, X } from 'lucide-react';
import PostCard from '../components/Feed/PostCard';
import { sahasProfile } from '../data/profileData';
import { nikiniProfile } from '../data/nikiniProfileData';
import Navbar from '../components/Navbar';
import Composer from '../components/Feed/Composer';

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const isCurrentUser = username === 'nikini-weerasinghe';
  const profile = isCurrentUser ? nikiniProfile : sahasProfile;
  const { user, coverPhoto, profilePhoto, intro, photos, posts } = profile;
  const followers = 'followers' in profile ? profile.followers : undefined;
  const following = 'following' in profile ? profile.following : undefined;
  const friendCount = 'friendCount' in profile ? profile.friendCount : undefined;
  const mutualFriends = 'mutualFriends' in profile ? profile.mutualFriends : undefined;
  const bio = 'bio' in profile ? profile.bio : undefined;

  return (
    <div className="min-h-screen bg-fb-gray">
      <Navbar />
      <div className="pt-14">
      {/* Cover Photo */}
      <div className="relative w-full h-80 bg-gray-200">
        {coverPhoto ? (
          <img
            src={coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300"></div>
        )}
        {isCurrentUser && (
          <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-sm">
            <span className="text-sm font-semibold text-black">Add Cover Photo</span>
          </button>
        )}
        {/* Profile Picture Overlay */}
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <div className="relative w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white">
            <img
              src={profilePhoto}
              alt={user.name}
              className="w-full h-full object-cover"
            />
            {isCurrentUser && (
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-fb-gray rounded-full flex items-center justify-center border-2 border-white hover:bg-gray-300 transition-colors">
                <span className="text-xs">📷</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="bg-white border-b border-gray-200 pb-4">
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-black mb-2">{user.name}</h1>
              {followers && following ? (
                <div className="flex items-center gap-4 text-sm text-black mb-3">
                  <span>{followers} followers</span>
                  <span>•</span>
                  <span>{following} following</span>
                </div>
              ) : (
                <div className="flex items-center gap-4 text-sm text-black mb-3">
                  <span>{friendCount} friends</span>
                  <span>{mutualFriends} mutual</span>
                </div>
              )}
              {/* Friend Avatars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="Friend"
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isCurrentUser ? (
                <>
                  <button className="px-4 py-2 bg-fb-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Dashboard
                  </button>
                  <button className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300 flex items-center gap-2">
                    <Pencil className="w-4 h-4" />
                    Edit
                  </button>
                </>
              ) : (
                <>
                  <button className="px-4 py-2 bg-fb-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Respond
                  </button>
                  <button className="px-4 py-2 bg-fb-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Message
                  </button>
                </>
              )}
              <button className="w-10 h-10 rounded-full bg-fb-gray hover:bg-gray-300 flex items-center justify-center">
                <MoreVertical className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
          
          {/* Friend Request Banner - Only for Sahas */}
          {!isCurrentUser && (
            <div className="mt-4 p-3 bg-gray-100 rounded-lg flex items-center justify-between">
              <span className="text-sm text-black">Sahas Weerawarna sent you a friend request</span>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-fb-blue text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Confirm request
                </button>
                <button className="px-4 py-1.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors border border-gray-300 flex items-center gap-1">
                  <X className="w-4 h-4" />
                  Delete Request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-8">
            <button className="px-4 py-3 border-b-2 border-fb-blue text-fb-blue font-semibold">
              Posts
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              About
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              Reels
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              Photos
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              Groups
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              Events
            </button>
            <button className="px-4 py-3 text-black hover:text-fb-blue font-semibold">
              More ▾
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex gap-4">
        {/* Left Sidebar */}
        <div className="w-80 flex-shrink-0 space-y-4">
          {/* Intro Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-xl font-bold text-black mb-4">Intro</h2>
            {bio && (
              <div className="mb-4">
                <p className="text-sm text-black">{bio}</p>
                {isCurrentUser && (
                  <button className="text-sm text-fb-blue hover:underline mt-2">Edit Bio</button>
                )}
              </div>
            )}
            <div className="space-y-3">
              {intro.work?.map((work, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-black">{work}</span>
                </div>
              ))}
              {intro.education?.map((edu, i) => (
                <div key={i} className="flex items-start gap-2">
                  <GraduationCap className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-black">{edu}</span>
                </div>
              ))}
              {intro.location?.map((loc, i) => (
                <div key={i} className="flex items-start gap-2">
                  {i === 0 ? (
                    <Home className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm text-black">{loc}</span>
                </div>
              ))}
              {intro.relationship && (
                <div className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-black">{intro.relationship}</span>
                </div>
              )}
            </div>
            {isCurrentUser && (
              <button className="mt-4 text-sm text-fb-blue hover:underline">Edit details</button>
            )}
          </div>

          {/* Photos Card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-black">Photos</h2>
              <button className="text-sm text-fb-blue hover:underline">See All Photos</button>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={`Photo ${i + 1}`}
                  className="w-full aspect-square object-cover rounded cursor-pointer hover:opacity-90 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Posts Feed */}
        <div className="flex-1 min-w-0">
          {/* Composer - Only for current user */}
          {isCurrentUser && <Composer />}

          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-black">Posts</h2>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-fb-gray rounded-lg hover:bg-gray-300 transition-colors">
                  <Filter className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-semibold text-black">Filters</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-fb-gray rounded-lg hover:bg-gray-300 transition-colors">
                  <span className="text-sm font-semibold text-black">Manage posts</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
              <button className="flex items-center gap-2 px-3 py-2 bg-fb-blue text-white rounded-lg text-sm font-semibold">
                <List className="w-4 h-4" />
                List view
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-lg text-sm font-semibold hover:bg-fb-gray">
                <Grid className="w-4 h-4" />
                Grid view
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
