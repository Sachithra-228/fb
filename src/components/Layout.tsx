import { useState } from 'react';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import FriendRequestModal from './FriendRequestModal';

const Layout = () => {
  const [friendRequestModal, setFriendRequestModal] = useState<{
    isOpen: boolean;
    userName: string;
    userAvatar: string;
    time: string;
  }>({
    isOpen: false,
    userName: '',
    userAvatar: '',
    time: '',
  });

  const handleFriendRequestClick = (userName: string, userAvatar: string, time: string) => {
    setFriendRequestModal({
      isOpen: true,
      userName,
      userAvatar,
      time,
    });
  };

  const handleCloseModal = () => {
    setFriendRequestModal({
      isOpen: false,
      userName: '',
      userAvatar: '',
      time: '',
    });
  };

  return (
    <div className="min-h-screen bg-fb-gray">
      <Navbar onFriendRequestClick={handleFriendRequestClick} />
      <div className="flex pt-14">
        <LeftSidebar />
        <div className="flex-1 flex justify-center">
          <Feed />
        </div>
        <div className="hidden xl:block">
          <RightSidebar />
        </div>
      </div>
      <FriendRequestModal
        isOpen={friendRequestModal.isOpen}
        onClose={handleCloseModal}
        userName={friendRequestModal.userName}
        userAvatar={friendRequestModal.userAvatar}
        time={friendRequestModal.time}
      />
    </div>
  );
};

export default Layout;
