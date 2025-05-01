const List = ({ children }) => {
  return (
    <li className="w-100 list-none rounded-xl border-1 border-primary px-2 py-1 text-center text-body text-secondary">
      {children}
    </li>
  );
};

export default List;
