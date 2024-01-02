// 비동기로 동작하는 함수
// 호출하면 Post의 배열을 반환하는 promise를 리턴
// Post 타입이며 title, description, date, category, path, featured 타입을 가지고 있는 객체
// getAllPosts 함수를 호출하면 json 파일을 읽어와서 배열형태로 반환

import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json'); // 파일 경로 설정
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse) // 타입에 대한 명시가 없으면 sort함수에 전달되는 a,b의 타입이 any타입이기 때문에 Post타입인걸 명시해 줘야한다
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
