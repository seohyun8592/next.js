type Props = {
  params: {
    slug: string; //폴더 이름에 따라 키 값 변경
  };
};

export default function PantsPage({ params }: Props) {
  //props.params
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}
// 다이나믹 라우팅 (Dynamic Routing) : 정해진 경로가 아니라 동적으로 접근
// 서버에 요청 할 때 페이지가 만들어 짐 (SSR 방식)

/**
 * 원하는 경로에 한해 페이지를 미리 만들어 놓고 싶을 때 명시해 주는 함수
 * generateStaticParams 함수 : next.js에서 정해준 규격 사항
 * 빌드 할 때 명시 해 둔 prop(pants, skirt) 컴포넌트 페이지를 미리 SSG 방식으로 만들어 둠
 */
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({ slug: product }));
}
