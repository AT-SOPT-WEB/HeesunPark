const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-100 rounded-xl border-1 border-primary bg-blue-100 px-2 py-2 text-body focus:border-blue-700 focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;
