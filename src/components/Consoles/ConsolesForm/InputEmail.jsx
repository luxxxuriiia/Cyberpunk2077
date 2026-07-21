import Input from "../../common/Input";

function InputEmail({ value, onChange }) {
  return (
    <label>
      <Input
        value={value}
        onChange={onChange}
        type="email"
        name="user_email"
        placeholder="Твой e-mail"
        className="mb-9 w-full pb-3"
      />
    </label>
  );
}

export default InputEmail;
