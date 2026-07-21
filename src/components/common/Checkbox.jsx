import Input from "./Input";

function Checkbox({ checked, onChange }) {
  return (
    <>
      <Input
        onChange={onChange}
        checked={checked}
        type="checkbox"
        name="agreement"
        className="peer sr-only h-3 w-3 appearance-none border border-inputBorder"
      />
      <span className="block h-3 w-3 border border-gray-500 bg-black hover:cursor-pointer"></span>

      <span className="absolute top-0 left-0.5 hidden cursor-pointer text-xs leading-none text-primary peer-checked:block">
        ✓
      </span>
    </>
  );
}

export default Checkbox;
