import Input from "./Input";
import Card from "./Card";
import { useGitHubUser } from "../hooks/useGitHubUser";
import { useState } from "react";
const GitHubUserSearch = () => {
  const [userInput, setUserInput] = useState("");
  const { userInfo, getUserInfo } = useGitHubUser();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && userInput) {
      getUserInfo(userInput);
      setUserInput("");
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="GitHub 프로필을 검색해보세요"
      />
      {userInfo.status === "resolved" && <Card {...userInfo.data} />}
    </div>
  );
};

export default GitHubUserSearch;
