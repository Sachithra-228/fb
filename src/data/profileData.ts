import { Post, User } from '../types';

export const sahasProfile: {
  user: User;
  coverPhoto: string;
  profilePhoto: string;
  friendCount: string;
  mutualFriends: number;
  intro: {
    work?: string[];
    education?: string[];
    location?: string[];
    relationship?: string;
  };
  photos: string[];
  posts: Post[];
} = {
  user: {
    id: '11',
    name: 'Sahas Weerawarna',
    avatar: '/sahas_pp.jpg',
  },
  coverPhoto: '/55.jpg',
  profilePhoto: '/sahas_pp.jpg',
  friendCount: '1.9K',
  mutualFriends: 40,
  intro: {
    work: [
      'Musician · Professional',
      'Guitarist at Colombo Music Studio',
      'Music Producer',
    ],
    education: [
      'Studied Music Performance at University of the Visual & Performing Arts, Colombo',
      'Studied Guitar at Sri Lanka Music Academy',
      'Went to Kottawa Dharmapala Maha Vidyalaya',
    ],
    location: [
      'Lives in Maharagama',
      'From Maharagama, Sri Lanka',
    ],
    relationship: 'Married to Sachini Maheesha',
  },
  photos: [
    '/image_1.jpg',
    '/image_4.jpg',
    '/image_3.jpg',
    '/image_2.jpg',
    '/ina_relationship.png',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop', // Music - guitar
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop', // Music - piano
    'https://images.unsplash.com/photo-1516280448614-9f8e9d5355e3?w=400&h=400&fit=crop', // Music - microphone
  ],
  posts: [
    {
      id: 'p8',
      user: { id: '11', name: 'Sahas Weerawarna', avatar: '/sahas_pp.jpg' },
      time: '2d',
      caption: 'Beautiful moments captured 📸',
      image: '/image_1.jpg',
      likes: 342,
      comments: 56,
    },
    {
      id: 'p9',
      user: { id: '11', name: 'Sahas Weerawarna', avatar: '/sahas_pp.jpg' },
      time: '5d',
      caption: 'Memories to cherish forever 💫',
      image: '/image_4.jpg',
      likes: 289,
      comments: 43,
    },
    {
      id: 'p10',
      user: { id: '11', name: 'Sahas Weerawarna', avatar: '/sahas_pp.jpg' },
      time: '1w',
      caption: 'Life is beautiful ✨',
      image: '/image_3.jpg',
      likes: 456,
      comments: 67,
    },
    {
      id: 'p11',
      user: { id: '11', name: 'Sahas Weerawarna', avatar: '/sahas_pp.jpg' },
      time: '2w',
      caption: 'Special moments 🎉',
      image: '/image_2.jpg',
      likes: 378,
      comments: 52,
    },
    {
      id: 'p12',
      user: { id: '11', name: 'Sahas Weerawarna', avatar: '/sahas_pp.jpg' },
      time: '2 months ago',
      caption: 'Sahas Weerawarna is in a relationship with Sachini Maheesha.',
      image: '/ina_relationship.png',
      likes: 1450,
      comments: 125,
      type: 'relationship',
      relationshipWith: 'Sachini Maheesha',
    },
  ],
};
