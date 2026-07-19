const lg = "lg:text-lg";

function Paragraph({ children, className }) {
  return (
    <p
      className={`text-base/8 font-roboto text-secondary leading-9 ${className} ${lg}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
