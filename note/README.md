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