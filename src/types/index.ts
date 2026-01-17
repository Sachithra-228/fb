export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Story {
  id: string;
  user: User;
  image: string;
}

export interface Post {
  id: string;
  user: User;
  time: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
  type?: 'relationship' | 'normal';
  relationshipWith?: string;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  time: string;
  likes?: number;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

export interface Shortcut {
  id: string;
  name: string;
  image: string;
}

export interface Sponsored {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface FriendRequest {
  id: string;
  user: User;
  mutualFriends: number;
}

export interface Notification {
  id: string;
  user?: User;
  type: 'birthday' | 'group' | 'poke' | 'event' | 'invitation' | 'friend_request';
  text: string;
  time: string;
  icon?: string;
  isUnread: boolean;
}
