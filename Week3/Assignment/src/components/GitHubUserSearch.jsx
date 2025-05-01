import Input from "./Input";
import Card from "./Card";
import { useGitHubUser } from "../hooks/useGitHubUser";
import { useEffect, useState } from "react";
import { GITHUB_KEY } from "../constant/storageKey";
import { setItem } from "../utils/storageUtils";
import List from "./List";
import { useUserHistory } from "../hooks/useUserHistory";
import { renderUserInfo } from "../hooks/renderUserInfo";
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
      <ul className="flex gap-2">
        {[...userList].reverse().map((user, i) => (
          <List
            key={`${user}-${i}`}
            onClick={() => {
              getUserInfo(user);
              setUserInput(user);
              setShowCard(true);
            }}
            className="flex cursor-pointer items-center gap-1 hover:text-blue-500"
          >
            {user}
            <button
              type="button"
              onClick={(e) => {
                // 부모 onClick 방지
                e.stopPropagation();
                handleDeleteStore(user);
              }}
              className="flex cursor-pointer items-center"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </List>
        ))}
      </ul>
      {content}
    </div>
  );
};

export default GitHubUserSearch;
