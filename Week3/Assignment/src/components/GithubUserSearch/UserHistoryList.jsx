import List from "../../shared/List";
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
