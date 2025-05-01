import Card from "../components/GithubUserSearch/Card";
import { ClipLoader } from "react-spinners";
export const renderUserInfo = (userInfo, showCard, handleCloseCard) => {
  if (userInfo.status === "pending") {
    return (
      <div className="mt-8 flex items-center justify-center">
        <ClipLoader color="#2563eb" size={48} />
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
