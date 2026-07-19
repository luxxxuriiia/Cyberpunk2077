// 1024px
const lg = {
  paragraph: "lg:text-lg",
};

function Paragraph({ children, className }) {
  return (
    <p
      className={`font-roboto text-base/8 leading-9 text-secondary ${lg.paragraph} ${className}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
