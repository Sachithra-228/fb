import { Story, Post, MenuItem, Shortcut, Sponsored, FriendRequest, Notification } from '../types';

export const currentUser = {
  id: '1',
  name: 'Nikini Weerasinghe',
  avatar: '/tashmi_1.png',
};

export const stories: Story[] = [
  { id: '1', user: { id: '2', name: 'Kamalini Perera', avatar: 'https://i.pravatar.cc/150?img=47' }, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=600&fit=crop' },
  { id: '2', user: { id: '3', name: 'Sachini Navodya', avatar: 'https://i.pravatar.cc/150?img=48' }, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=600&fit=crop' },
  { id: '3', user: { id: '4', name: 'Chathurika Wijesinghe', avatar: 'https://i.pravatar.cc/150?img=49' }, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop' },
  { id: '4', user: { id: '5', name: 'Oshi Madusha', avatar: 'https://i.pravatar.cc/150?img=50' }, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=600&fit=crop' },
  { id: '5', user: { id: '6', name: 'Dinushi Archana', avatar: 'https://i.pravatar.cc/150?img=51' }, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=600&fit=crop' },
];

export const posts: Post[] = [
  {
    id: '1',
    user: { id: '2', name: 'Kamalini Perera', avatar: 'https://i.pravatar.cc/150?img=47' },
    time: '2h',
    caption: 'Beautiful ocean view from the southern coast of Sri Lanka! The waves are so peaceful here 🌊',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    likes: 245,
    comments: 32,
  },
  {
    id: '2',
    user: { id: '3', name: 'Sachini Navodya', avatar: 'https://i.pravatar.cc/150?img=48' },
    time: '5h',
    caption: 'Exploring the beautiful tea plantations in the hill country. The misty mountains are breathtaking! 🍃',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
    likes: 189,
    comments: 15,
  },
  {
    id: '3',
    user: { id: '4', name: 'Chathurika Wijesinghe', avatar: 'https://i.pravatar.cc/150?img=49' },
    time: '1d',
    caption: 'Weekend trip to the ancient city of Anuradhapura. The history here is incredible! 🏛️',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    likes: 312,
    comments: 48,
  },
];

export const menuItems: MenuItem[] = [
  { id: '1', label: 'Meta AI', icon: 'sparkles' },
  { id: '2', label: 'Friends', icon: 'users' },
  { id: '3', label: 'Professional dashboard', icon: 'briefcase' },
  { id: '4', label: 'Memories', icon: 'clock' },
  { id: '5', label: 'Saved', icon: 'bookmark' },
  { id: '6', label: 'Groups', icon: 'users-round' },
  { id: '7', label: 'Reels', icon: 'video' },
  { id: '8', label: 'See more', icon: 'chevron-down' },
];

export const shortcuts: Shortcut[] = [
  { id: '1', name: 'Tech News', image: 'https://picsum.photos/40/40?random=20' },
  { id: '2', name: 'Photography', image: 'https://picsum.photos/40/40?random=21' },
];

export const sponsored: Sponsored[] = [
  {
    id: '1',
    title: 'Learn Web Development',
    image: 'https://picsum.photos/300/200?random=30',
    link: 'example.com',
  },
  {
    id: '2',
    title: 'Premium Coffee Subscription',
    image: 'https://picsum.photos/300/200?random=31',
    link: 'coffee.com',
  },
];

export const friendRequests: FriendRequest[] = [
  {
    id: '1',
    user: { id: '7', name: 'Thasmila Wijesooriya', avatar: 'https://i.pravatar.cc/150?img=52' },
    mutualFriends: 5,
  },
];

export const notifications: Notification[] = [
  {
    id: '1',
    user: { id: '8', name: 'Supun Kumarasiri', avatar: 'https://i.pravatar.cc/150?img=53' },
    type: 'birthday',
    text: 'Supun Kumarasiri and 14 others have birthdays today. Send them good thoughts!',
    time: '14h',
    isUnread: true,
  },
  {
    id: '2',
    user: { id: '9', name: 'Ankesh Rathod', avatar: 'https://i.pravatar.cc/150?img=54' },
    type: 'group',
    text: 'Ankesh Rathod and Mc Dæxy posted in likes for likes facebook.',
    time: '14h',
    isUnread: true,
  },
  {
    id: '3',
    user: { id: '10', name: 'Eshan Harshana', avatar: 'https://i.pravatar.cc/150?img=55' },
    type: 'poke',
    text: 'Eshan Harshana poked you.',
    time: '12h',
    isUnread: true,
  },
  {
    id: '5',
    user: { id: '12', name: 'Kamalini Perera', avatar: 'https://i.pravatar.cc/150?img=47' },
    type: 'group',
    text: 'Kamalini Perera commented on your post in Sri Lankan Travelers.',
    time: '1d',
    isUnread: true,
  },
  {
    id: '6',
    user: { id: '13', name: 'Sachini Navodya', avatar: 'https://i.pravatar.cc/150?img=48' },
    type: 'group',
    text: 'Sachini Navodya liked your photo in Colombo Photography Group.',
    time: '2d',
    isUnread: true,
  },
  {
    id: '7',
    user: { id: '14', name: 'Chathurika Wijesinghe', avatar: 'https://i.pravatar.cc/150?img=49' },
    type: 'poke',
    text: 'Chathurika Wijesinghe poked you.',
    time: '3d',
    isUnread: false,
  },
  {
    id: '8',
    user: { id: '15', name: 'Oshi Madusha', avatar: 'https://i.pravatar.cc/150?img=50' },
    type: 'group',
    text: 'Oshi Madusha shared a post in Kandy Food Lovers.',
    time: '4d',
    isUnread: false,
  },
  {
    id: '9',
    user: { id: '16', name: 'Dinushi Archana', avatar: 'https://i.pravatar.cc/150?img=51' },
    type: 'group',
    text: 'Dinushi Archana reacted to your comment.',
    time: '5d',
    isUnread: false,
  },
  {
    id: '10',
    user: { id: '17', name: 'Thasmila Wijesooriya', avatar: 'https://i.pravatar.cc/150?img=52' },
    type: 'group',
    text: 'Thasmila Wijesooriya mentioned you in a comment.',
    time: '1w',
    isUnread: false,
  },
  {
    id: '11',
    user: { id: '18', name: 'Loshan Ruwanpathirana', avatar: 'https://i.pravatar.cc/150?img=58' },
    type: 'poke',
    text: 'Loshan Ruwanpathirana poked you.',
    time: '1w',
    isUnread: false,
  },
  {
    id: '12',
    user: { id: '19', name: 'Shehanka Dassanayake', avatar: 'https://i.pravatar.cc/150?img=59' },
    type: 'group',
    text: 'Shehanka Dassanayake posted in Galle Beach Community.',
    time: '2w',
    isUnread: false,
  },
  {
    id: '13',
    user: { id: '20', name: 'Sachithra Wijesinghe', avatar: 'https://i.pravatar.cc/150?img=60' },
    type: 'group',
    text: 'Sachithra Wijesinghe liked your post in Sri Lankan Music.',
    time: '2w',
    isUnread: false,
  },
  {
    id: '14',
    user: { id: '21', name: 'Ravindu Adhikari', avatar: 'https://i.pravatar.cc/150?img=66' },
    type: 'birthday',
    text: 'Ravindu Adhikari and 3 others have birthdays today. Send them good thoughts!',
    time: '3w',
    isUnread: false,
  },
  {
    id: '15',
    user: { id: '22', name: 'Ayodya Chathurangi', avatar: 'https://i.pravatar.cc/150?img=67' },
    type: 'group',
    text: 'Ayodya Chathurangi commented on your photo.',
    time: '1mo',
    isUnread: false,
  },
  {
    id: '4',
    user: { id: '11', name: 'Sahas Weerawarna', avatar: '/sahas_pp.jpg' },
    type: 'friend_request',
    text: 'Sahas Weerawarna sent you a friend request.',
    time: '2 years ago',
    isUnread: true,
  },
];

export const birthdays = [
  { id: '1', name: 'Ravindu Adhikari' },
  { id: '2', name: 'Ayodya Chathurangi' },
];
