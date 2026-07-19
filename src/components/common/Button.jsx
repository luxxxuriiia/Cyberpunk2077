const primary = "bg-black text-primary";
const secondary = "bg-primary text-black";

function Button({ children, className, isSecondary }) {
  return (
    <button
      className={`font-bold font-roboto px-12.5 cursor-pointer ${isSecondary ? secondary : primary} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
