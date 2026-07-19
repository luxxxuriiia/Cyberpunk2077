import Input from "../../common/Input";

function InputName() {
  return (
    <label>
      <Input
        type="text"
        name="name"
        placeholder="Как тебя зовут?"
        className="w-full pb-3 mb-9"
      />
    </label>
  );
}

export default InputName;
