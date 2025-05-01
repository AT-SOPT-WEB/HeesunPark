import Input from "./Input";
import Card from "./Card";
import { useGitHubUser } from "../hooks/useGitHubUser";
import { useEffect, useState } from "react";
import { GITHUB_KEY } from "../constant/storageKey";
import { getItem, setItem } from "../utils/storageUtils";
import List from "./List";
const GitHubUserSearch = () => {
  const [userInput, setUserInput] = useState("");
  const { userInfo, getUserInfo } = useGitHubUser();
  const [showCard, setShowCard] = useState(false);
  const [userList, setUserList] = useState(() => getItem(GITHUB_KEY) || []);

  useEffect(() => {
    setItem(GITHUB_KEY, userList);
  }, [userList]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && userInput) {
      getUserInfo(userInput);
      setUserList((prev) => {
        const isExist = prev.some((user) => user === userInput);
        return isExist ? prev : [...prev, userInput];
      });
      setShowCard(true);
      setUserInput("");
    }
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

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
        {userList.map((user, i) => (
          <List
            key={`${user}-${i}`}
            className="cursor-pointer hover:text-blue-500"
          >
            {user}
          </List>
        ))}
      </ul>
      {userInfo.status === "resolved" && showCard && (
        <Card {...userInfo.data} onClose={handleCloseCard} />
      )}
    </div>
  );
};

export default GitHubUserSearch;
