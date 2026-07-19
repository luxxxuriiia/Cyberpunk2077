import Checkbox from "../../common/Checkbox";

function InputCheckbox() {
  return (
    <label className="relative flex items-center">
      <Checkbox />
      <span className="ml-2.5 font-roboto text-xs font-light">
        Согласен на обработку персональных данных
      </span>
    </label>
  );
}

export default InputCheckbox;
