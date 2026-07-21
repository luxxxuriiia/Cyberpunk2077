import Checkbox from "../../common/Checkbox";

function InputCheckbox({ checked, onChange }) {
  return (
    <label className="relative flex items-center">
      <Checkbox checked={checked} onChange={onChange} />
      <span className="ml-2.5 font-roboto text-xs font-light">
        Согласен на обработку персональных данных
      </span>
    </label>
  );
}

export default InputCheckbox;
