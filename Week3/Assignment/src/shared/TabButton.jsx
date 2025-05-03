const TabButton = ({ children, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`colorDuration cursor-pointer rounded-2xl px-2 py-1 text-white ${selected ? "bg-secondary" : "bg-primary"}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
