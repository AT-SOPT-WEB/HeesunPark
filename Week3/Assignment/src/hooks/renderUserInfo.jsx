import Card from "../components/GithubUserSearch/Card";

/**
 * getUserInfo로 반환되는 status 값에 따라 분기처리하는 함수
 * @param {*} userInfo 검색창에 입력한 아이디
 * @param {*} showCard 카드 렌더링 유무 state
 * @param {*} handleCloseCard x버튼 눌렀을때 카드 사라지게 하는 함수
 * @returns pending 상태면 스피너, rejected면 X, resolved면 Card 컴포넌트를 반환
 */
export const renderUserInfo = (userInfo, showCard, handleCloseCard) => {
  if (userInfo.status === "pending") {
    return (
      <div className="mt-8 flex items-center justify-center">
        <div
          className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-secondary border-t-transparent"
          aria-label="로딩 중"
        />
      </div>
    );
  }
  if (userInfo.status === "rejected") {
    return (
      <div className="mt-4 text-center text-red-500">
        결과를 찾을 수 없습니다.
      </div>
    );
  }
  if (userInfo.status === "resolved" && showCard) {
    return <Card {...userInfo.data} onClose={handleCloseCard} />;
  }
  return null;
};
