import Input from "../../shared/Input";
import { useGitHubUser } from "../../hooks/useGitHubUser";
import { useEffect, useState } from "react";
import { GITHUB_KEY } from "../../constant/storageKey";
import { setItem } from "../../utils/storageUtils";
import UserHistoryList from "./UserHistoryList";
import { useUserHistory } from "../../hooks/useUserHistory";
import { renderUserInfo } from "../../hooks/renderUserInfo";
const GitHubUserSearch = () => {
  const [userInput, setUserInput] = useState("");
  const { userInfo, getUserInfo } = useGitHubUser();
  const [showCard, setShowCard] = useState(false);
  const { userList, addUser, deleteUser } = useUserHistory();

  useEffect(() => {
    setItem(GITHUB_KEY, userList);
  }, [userList]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && userInput) {
      getUserInfo(userInput);
      addUser(userInput);
      setShowCard(true);
      setUserInput("");
    }
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setUserInput("");
  };

  const handleDeleteStore = (userToDelete) => {
    deleteUser(userToDelete);
    setShowCard(false);
    setUserInput("");
  };

  const content = renderUserInfo(userInfo, showCard, handleCloseCard);

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="GitHub 프로필을 검색해보세요"
      />
      <UserHistoryList
        userList={userList}
        onUserClick={(user) => {
          getUserInfo(user);
          setUserInput(user);
          setShowCard(true);
        }}
        onDeleteUser={handleDeleteStore}
      />
      {content}
    </div>
  );
};

export default GitHubUserSearch;
