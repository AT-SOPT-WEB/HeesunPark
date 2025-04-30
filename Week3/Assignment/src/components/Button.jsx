const Button = ({ selected, children, onClick }) => {
  return (
    <button
      type="button"
      className={`rounded-xl px-2 py-1 text-body text-white transition-colors duration-300 ease-in-out ${selected ? "bg-secondary" : "bg-primary"} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
