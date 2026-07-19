import Input from "./Input";

function Checkbox() {
  return (
    <>
      <Input
        type="checkbox"
        name="agreement"
        className="w-3 h-3 border appearance-none sr-only peer border-inputBorder"
      />
      <span class="block h-3 w-3 border border-gray-500 bg-black hover:cursor-pointer"></span>

      <span className="absolute top-0 left-0.5 hidden cursor-pointer text-xs leading-none text-primary peer-checked:block">
        ✓
      </span>
    </>
  );
}

export default Checkbox;
