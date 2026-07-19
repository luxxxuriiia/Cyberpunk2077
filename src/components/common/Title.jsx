// 1024px
const lg = {
  title: "lg:text-6xl",
};

function Title({ children, className, isSecondary }) {
  return (
    <h1
      className={`text-3xl font-archangelsk leading-none ${isSecondary ? "text-white" : ""} ${lg.title} ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
