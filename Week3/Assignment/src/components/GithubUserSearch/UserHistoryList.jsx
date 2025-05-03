import List from "../../shared/List";

/**
 * 최근 검색어 리스트 렌더링
 * 검색어 내 x버튼 클릭시 삭제
 * 검색어 클릭 시 카드 렌더링
 * @param {*} param0
 * @returns
 */
const UserHistoryList = ({ userList, onUserClick, onDeleteUser }) => {
  return (
    <ul className="flex gap-2">
      {[...userList].reverse().map((user, i) => (
        <List
          key={`${user}-${i}`}
          onClick={() => onUserClick(user)}
          className="flex cursor-pointer items-center gap-1 hover:text-blue-500"
        >
          {user}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteUser(user);
            }}
            className="flex cursor-pointer items-center"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </List>
      ))}
    </ul>
  );
};

export default UserHistoryList;
