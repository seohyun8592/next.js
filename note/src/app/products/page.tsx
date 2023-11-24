import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";

/**
 * revalidate (ISG : Incremental Server Generation)
 * export const revalidate = false
 * false : 기본값(기본적으로 SSG로 동작) | 'force-cache' | 0 : 요청이 올 때마다 렌더링(SSR) | number : 초 설정
 *
 * fetch 두번째 옵션으로 리밸리데이트를 사용할 수 있음
 * next: {revalidate: 3}
 * cache: '' or cache: 'no-store' 와 동일
 */

// export const revalidate = 3;
export default async function ProductsPage() {
  // @서버 파일(데이터베이스)에 있는 제품 리스트를 읽어와서 출력
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
