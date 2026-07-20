// 1024px
const lg = {
  paragraph: "lg:text-lg",
};

function Paragraph({ children, className }) {
  return (
    <p
      className={`font-roboto text-base/8 font-normal ${className} ${lg.paragraph} `}
    >
      {children}
    </p>
  );
}

export default Paragraph;
