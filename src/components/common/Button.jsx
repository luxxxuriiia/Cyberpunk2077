function Button({ children, className }) {
  return (
    <button
      className={`text-xl lg:text-2xl bg-black text-primary py-3 lg:py-5 px-12 font-semibold font-roboto ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
