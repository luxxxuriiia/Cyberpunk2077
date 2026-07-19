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
  button: "lg:w-48",
};

function ConsolesForm() {
  return (
    <form className={`flex flex-col text-white mb-17 ${md.form}`}>
      <InputName />
      <InputEmail />
      <InputScreenshot />
      <Button isSecondary type="submit" className={`w-45 mb-3 ${lg.button}`}>
        Отправить
      </Button>
      <InputCheckbox />
    </form>
  );
}

export default ConsolesForm;
