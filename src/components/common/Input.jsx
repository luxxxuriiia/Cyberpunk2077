function Input({
  value,
  onChange,
  type,
  name,
  placeholder,
  className,
  checked,
}) {
  return (
    <input
      checked={checked}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`border-b border-inputBorder placeholder-white placeholder:font-roboto placeholder:font-light focus:outline-none ${className}`}
    />
  );
}

export default Input;
