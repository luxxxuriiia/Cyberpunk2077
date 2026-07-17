const lg = "lg:text-lg";

function Paragraph({ children, className }) {
  return (
    <p
      className={`text-base/8 font-roboto font-normal text-secondary   ${className} ${lg}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
