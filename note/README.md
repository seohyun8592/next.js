# next.js

## Dinamic Routing(동적 라우팅)

### generateStaticParams() : 동적 라우팅 페이지 안에서 따로 SSG 방식으로 빌드 할 때 미리 생성

# snippet

{
"Console log": {
"prefix": "con",
"body": "console.log('$1')"
},

    "React Function Component": {
    	"prefix": "rfc",
    	"body": ["export default function ${1:${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}}($2) {", "$3","return $4;", "}$5"]
    }

}

## Link

### import Link from "next/link";

## Metadata

- 각 페이지별로 head를 설정할 수 있음
- generateMetadata 함수를 사용해 다이나믹한 메타데이터 사용 가능


## git branch 가져오기
git remote update  
git checkout -t origin/브랜치명

## 작업 후 master branch merge
git checkout master  
git merge '작업브랜치명'


## Server Component

## Client Component

## Fetch

## Rendering

## API Routes


v12 
페이지 단위로 렌더링 방식을 규정

v13 
한 페이지 내에서 서버 컴포넌트와 클라이언트 컴포넌트를 적절하게 섞어서 사용
Server Component
Client Component