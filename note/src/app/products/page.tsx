import { getProducts } from "@/service/products";
import Link from "next/link";


/**
 * revalidate (ISG : Incremental Server Generation)
 * export const revalidate = false (기본은 SSG로 동작)
 * false | 'force-cache' | 0 : 요청이 올 때마다 렌더링(SSG) | number(초 설정)
 */

export const revalidate = 3;
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
    </>
  );
}
