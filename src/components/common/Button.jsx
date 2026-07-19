const primary =
  "text-base bg-black text-primary py-3 px-12 font-semibold font-roboto lg:text-2xl lg:py-5";
const secondary =
  "text-base bg-primary text-black py-4 px-12 font-bold font-roboto md:text-lg";

function Button({ children, className, isSecondary }) {
  return (
    <button
      className={`cursor-pointer ${isSecondary ? secondary : primary} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
