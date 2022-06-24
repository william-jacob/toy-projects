// 에러: React Hook "useRouter" is called in function
// 해결: 컴포넌트 첫문자 대문자로 바꾸기
import { useRouter } from "next/router";

const ReviewDetail = () => {
  const router = useRouter();

  const { productId, reviewId } = router.query;
  //localhost:3000/routes/products1/productId자리/review/reviewId자리

  return (
    <div>
      상품 id: {productId}, 리뷰 id: {reviewId}
    </div>
  );
};

export default ReviewDetail;
