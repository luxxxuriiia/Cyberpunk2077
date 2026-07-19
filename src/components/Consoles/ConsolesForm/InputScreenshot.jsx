import Input from "../../common/Input";

function InputScreenshot() {
  return (
    <label className="py-12 text-center underline border border-dashed mb-9 border-inputBorder">
      <span className="font-light font-roboto">Прикрепить скриншот</span>
      <Input type="file" name="screenshot" className="hidden" />
    </label>
  );
}

export default InputScreenshot;
