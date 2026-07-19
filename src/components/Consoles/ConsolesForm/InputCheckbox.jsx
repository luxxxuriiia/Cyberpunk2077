import Checkbox from "../../common/Checkbox";

function InputCheckbox() {
  return (
    <label className="relative flex items-center">
      <Checkbox />
      <span className="font-roboto font-light text-xs ml-2.5">
        Согласен на обработку персональных данных
      </span>
    </label>
  );
}

export default InputCheckbox;
