import Input from "./Input";

function Checkbox() {
  return (
    <>
      <Input
        type="checkbox"
        name="agreement"
        className="appearance-none w-3 h-3 border border-inputBorder peer sr-only"
      />
      <span class="block w-3 h-3 border border-gray-500 bg-black hover:cursor-pointer"></span>

      <span className="absolute hidden text-primary text-xs top-0 left-0.5 leading-none cursor-pointer peer-checked:block">
        ✓
      </span>
    </>
  );
}

export default Checkbox;
