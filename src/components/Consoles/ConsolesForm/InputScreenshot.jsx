import Input from "../../common/Input";

function InputScreenshot() {
  return (
    <label className="text-center border border-inputBorder border-dashed py-12 underline mb-9">
      <span className="font-roboto font-light">Прикрепить скриншот</span>
      <Input type="file" name="screenshot" className="hidden" />
    </label>
  );
}

export default InputScreenshot;
