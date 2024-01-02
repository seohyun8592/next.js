import { Post } from '@/api/posts';
import React from 'react';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="posts__items">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
      <li></li>
    </ul>
  );
}
