import { getProducts } from "@/components/products";
import Link from "next/link";

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
