const primary = "bg-black text-primary";
const secondary = "bg-primary text-black";

function Button({ children, className, isSecondary, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-12.5 font-roboto font-bold opacity-100 transition-opacity duration-300 hover:opacity-80 ${isSecondary ? secondary : primary} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
