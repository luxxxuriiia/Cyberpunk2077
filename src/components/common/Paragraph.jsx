// 1024px
const lg = {
  paragraph: "lg:text-lg",
};

function Paragraph({ children, className }) {
  return (
    <p
      className={`text-base/8 font-roboto text-secondary leading-9 ${lg.paragraph} ${className}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
