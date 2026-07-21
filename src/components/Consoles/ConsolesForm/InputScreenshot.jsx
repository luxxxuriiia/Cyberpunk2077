import Input from "../../common/Input";

function InputScreenshot({ onChange }) {
  return (
    <label className="mb-9 border border-dashed border-inputBorder py-12 text-center underline hover:cursor-pointer">
      <span className="font-roboto font-light">Прикрепить скриншот</span>
      <Input
        onChange={onChange}
        type="file"
        name="screenshot"
        className="hidden"
      />
    </label>
  );
}

export default InputScreenshot;
