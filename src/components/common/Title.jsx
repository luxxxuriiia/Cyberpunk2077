function Title({ children, className }) {
  return (
    <h1
      className={`text-3xl font-archangelsk leading-none lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
