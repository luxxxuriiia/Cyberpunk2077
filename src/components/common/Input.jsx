function Input({ type, name, placeholder, className }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`placeholder:font-roboto placeholder:font-light placeholder-white border-b border-inputBorder focus:outline-none ${className}`}
    />
  );
}

export default Input;
