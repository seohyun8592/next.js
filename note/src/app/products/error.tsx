"use client";

// React Error Boundary
// 에러는 버블링 되며 해당 폴더에 에러 페이지가 없을 경우 가장 근접한 부모 폴더에 있는 에러 페이지를 보여준다
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
