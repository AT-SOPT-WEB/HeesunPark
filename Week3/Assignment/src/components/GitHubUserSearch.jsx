import Input from "./Input";
import Card from "./Card";
import { useGitHubUser } from "../hooks/useGitHubUser";
import { useEffect, useState } from "react";
import { GITHUB_KEY } from "../constant/storageKey";
import { getItem, setItem } from "../utils/storageUtils";
import List from "./List";
import { MAX_STORE } from "../constant/maxValue";
import { ClipLoader } from "react-spinners";
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
        const newList = isExist ? prev : [userInput, ...prev];
        return newList.slice(0, MAX_STORE);
      });
      setShowCard(true);
      setUserInput("");
    }
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setUserInput("");
  };

  const handleDeleteStore = (userToDelete) => {
    const newList = userList.filter((user) => user !== userToDelete);
    setUserList(newList);
    setShowCard(false);
    setUserInput("");
    setItem(GITHUB_KEY, newList);
  };

  let content = null;
  if (userInfo.status === "pending") {
    content = (
      <div className="mt-8 flex items-center justify-center">
        <ClipLoader color="bg-blue-900" size={48} />
      </div>
    );
  } else if (userInfo.status === "rejected") {
    content = (
      <div className="mt-4 text-center text-red-500">
        결과를 찾을 수 없습니다.
      </div>
    );
  } else if (userInfo.status === "resolved" && showCard) {
    content = <Card {...userInfo.data} onClose={handleCloseCard} />;
  }

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
