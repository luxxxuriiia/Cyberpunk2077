// 1024px
const lg = {
  primaryTitle: "lg:text-6xl",
  secondaryTitle: "lg:text-6xl",
};

const primary = `text-3xl font-archangelsk leading-none ${lg.primaryTitle}`;
const secondary = `text-white text-3xl font-archangelsk leading-none ${lg.secondaryTitle}`;

function Title({ children, className, isSecondary }) {
  return (
    <h1 className={`${isSecondary ? secondary : primary} ${className}`}>
      {children}
    </h1>
  );
}

export default Title;
