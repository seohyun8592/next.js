import { Post } from '@/api/posts';
import React from 'react';

type Props = {
  posts: Post[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="posts__items">
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}
      <li></li>
    </ul>
  );
}
