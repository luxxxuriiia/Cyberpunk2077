import Button from "../common/Button";
import InputName from "./ConsolesForm/InputName";
import InputEmail from "./ConsolesForm/InputEmail";
import InputScreenshot from "./ConsolesForm/InputScreenshot";
import InputCheckbox from "./ConsolesForm/InputCheckbox";

// 768px
const md = {
  form: "md:w-115",
};

// 1024px
const lg = {
  button: "lg:w-48 lg:text-lg lg:py-4",
};

function ConsolesForm() {
  return (
    <form className={`mb-17 flex flex-col text-white ${md.form}`}>
      <InputName />
      <InputEmail />
      <InputScreenshot />
      <Button
        isSecondary
        type="submit"
        className={`mb-3 w-45 py-4.5 ${lg.button}`}
      >
        Отправить
      </Button>
      <InputCheckbox />
    </form>
  );
}

export default ConsolesForm;
