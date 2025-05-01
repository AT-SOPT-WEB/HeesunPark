import { useState, useEffect } from "react";
import { GITHUB_KEY } from "../constant/storageKey";
import { getItem, setItem } from "../utils/storageUtils";
import { MAX_STORE } from "../constant/maxValue";

/**
 * 최근 검색어를 추가하고, 삭제하는 훅
 * @returns userList(검색 히스토리), addUser, deleteUser, setUserList
 */
export const useUserHistory = () => {
  const [userList, setUserList] = useState(() => getItem(GITHUB_KEY) || []);

  useEffect(() => {
    setItem(GITHUB_KEY, userList);
  }, [userList]);

  // 검색 기록 추가 (중복 방지, 최신순, 최대 3개)
  const addUser = (user) => {
    setUserList((prev) => {
      const isExist = prev.some((u) => u === user);
      const newList = isExist ? prev : [user, ...prev];
      return newList.slice(0, MAX_STORE);
    });
  };

  // 검색 기록 삭제
  const deleteUser = (user) => {
    setUserList((prev) => prev.filter((u) => u !== user));
  };

  return { userList, addUser, deleteUser, setUserList };
};
