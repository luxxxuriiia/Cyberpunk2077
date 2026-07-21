import Input from "../../common/Input";

function InputName({ value, onChange }) {
  return (
    <label>
      <Input
        type="text"
        name="user_name"
        placeholder="Как тебя зовут?"
        className="mb-9 w-full pb-3"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default InputName;
