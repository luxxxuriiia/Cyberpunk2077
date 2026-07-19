const primary = "bg-black text-primary";
const secondary = "bg-primary text-black";

function Button({ children, className, isSecondary }) {
  return (
    <button
      className={`cursor-pointer px-12.5 font-roboto font-bold ${isSecondary ? secondary : primary} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
