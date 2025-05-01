const Button = ({ children, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-2xl px-2 py-1 text-white transition-colors duration-200 ease-in-out ${selected ? "bg-secondary" : "bg-primary"}`}
    >
      {children}
    </button>
  );
};

export default Button;
