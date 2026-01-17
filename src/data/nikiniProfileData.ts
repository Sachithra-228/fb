import { Post, User } from '../types';

export const nikiniProfile: {
  user: User;
  coverPhoto: string;
  profilePhoto: string;
  followers: string;
  following: string;
  bio?: string;
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
    id: '1',
    name: 'Nikini Weerasinghe',
    avatar: '/tashmi_1.png',
  },
  coverPhoto: 'https://picsum.photos/1200/400?random=200',
  profilePhoto: '/tashmi_1.png',
  followers: '5K',
  following: '472',
  bio: 'Study to save lives 💜💜💜💜',
  intro: {
    work: [
      'Profile · Digital creator',
    ],
    education: [
      'Went to Studies at SLIIT - Faculty of Computing Malabe, Sri Lanka',
      'Studied IT programming at ESOFT Metro Campus',
      'Studied at University of Moratuwa',
      'Studied Voice Performance & creative presentation at Sri Lanka Broadcasting Corporation',
      'Went to Dharmapala vidyalaya pannipitiya',
    ],
    location: [
      'Lives in Kottawa, Sri Lanka',
    ],
    relationship: 'Single',
  },
  photos: [
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop', // Music - guitar
    '/tashmi_2.jpg',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop', // Music - piano
    '/tashmi_1.png',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop', // Music - DJ
    '/tashmi_3.jpg',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop', // Music - guitar
    'https://images.unsplash.com/photo-1516280448614-9f8e9d5355e3?w=400&h=400&fit=crop', // Music - microphone
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop', // Music - drums
  ],
  posts: [
    {
      id: 'n1',
      user: { id: '1', name: 'Nikini Weerasinghe', avatar: '/tashmi_1.png' },
      time: '23 October 2025',
      caption: 'Beautiful moments ✨',
      image: '/tashmi_2.jpg',
      likes: 1250,
      comments: 89,
    },
    {
      id: 'n2',
      user: { id: '1', name: 'Nikini Weerasinghe', avatar: '/tashmi_1.png' },
      time: '1w',
      caption: 'Music is my passion! 🎵 Playing my favorite guitar piece from a traditional Sri Lankan melody 🎸',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      likes: 890,
      comments: 45,
    },
    {
      id: 'n3',
      user: { id: '1', name: 'Nikini Weerasinghe', avatar: '/tashmi_1.png' },
      time: '2w',
      caption: 'Memories 💕',
      image: '/tashmi_3.jpg',
      likes: 756,
      comments: 32,
    },
    {
      id: 'n4',
      user: { id: '1', name: 'Nikini Weerasinghe', avatar: '/tashmi_1.png' },
      time: '3w',
      caption: 'Studio session vibes! 🎤 Recording some new tracks today. Music production is so therapeutic! 🎹',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      likes: 623,
      comments: 28,
    },
    {
      id: 'n5',
      user: { id: '1', name: 'Nikini Weerasinghe', avatar: '/tashmi_1.png' },
      time: '4w',
      caption: '❤️',
      image: '/tashmi_1.png',
      likes: 542,
      comments: 19,
    },
    {
      id: 'n6',
      user: { id: '1', name: 'Nikini Weerasinghe', avatar: '/tashmi_1.png' },
      time: '1mo',
      caption: 'Live performance energy! 🎤 The crowd was amazing tonight. Sri Lankan music brings people together! 🎵',
      image: 'https://images.unsplash.com/photo-1516280448614-9f8e9d5355e3?w=800&h=600&fit=crop',
      likes: 1123,
      comments: 67,
    },
  ],
};
