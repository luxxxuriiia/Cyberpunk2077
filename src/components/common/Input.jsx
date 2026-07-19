function Input({ type, name, placeholder, className }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`border-b border-inputBorder placeholder-white placeholder:font-roboto placeholder:font-light focus:outline-none ${className}`}
    />
  );
}

export default Input;
