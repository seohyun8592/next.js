import React from 'react';
import PostsGrid from './PostsGrid';
import { getAllPosts } from '@/api/posts';

export default async function FeaturedPosts() {
  // 1. 모든 포스트 데이터 읽어오기
  const posts = await getAllPosts();
  
  // 2. 모든 데이터 보여주기
  

  return (
    <section className='featuredPost__container'>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  );
}
