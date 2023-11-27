import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 3;

type Props = {
  params: {
    slug: string; //폴더 이름에 따라 키 값 변경
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품명 : ${slug}`,
  };
}

export default async function ProductsItemPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  // @서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 출력
  //props.params
  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width="300"
        height="300"
      />
    </>
  );
}
// 다이나믹 라우팅 (Dynamic Routing) : 정해진 경로가 아니라 동적으로 접근
// 서버에 요청 할 때 페이지가 만들어 짐 (SSR 방식)

/**
 * generateStaticParams 함수 : next.js에서 정해준 규격 사항
 * 원하는 경로에 한해 페이지를 미리 만들어 놓고 싶을 때 명시해 주는 함수
 * 빌드 할 때 명시 해 둔 prop(pants, skirt) 컴포넌트 페이지를 미리 SSG 방식으로 만들어 둠
 */
export async function generateStaticParams() {
  const products = await getProducts();
  // @모든 제품의 페이지들을 미리 만들어 둘 수 있게 세팅 (SSG)
  return products.map((product) => ({ slug: product.id }));
}
