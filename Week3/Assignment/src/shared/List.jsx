const List = ({ className = "", onClick, children }) => {
  return (
    <li
      onClick={onClick}
      className={`${className} list-none rounded-xl border-1 border-primary px-2 py-1 text-center text-body text-secondary`}
    >
      {children}
    </li>
  );
};

export default List;
