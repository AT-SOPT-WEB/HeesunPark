import { useState } from "react";

/**
 *
 * @returns userInfo(사용자의 정보), getUserInfo(github api)
 */
export const useGitHubUser = () => {
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });

  const getUserInfo = async (user) => {
    setUserInfo({ status: "pending", data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setUserInfo({ status: "resolved", data });
    } catch {
      setUserInfo({ status: "rejected", data: null });
    }
  };

  return { userInfo, getUserInfo };
};
