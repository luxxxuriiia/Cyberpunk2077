import Input from "../../common/Input";

function InputEmail() {
  return (
    <label>
      <Input
        type="email"
        name="email"
        placeholder="Твой e-mail"
        className="w-full pb-3 mb-9"
      />
    </label>
  );
}

export default InputEmail;
