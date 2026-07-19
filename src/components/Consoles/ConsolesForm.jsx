import Button from "../common/Button";
import InputName from "./ConsolesForm/InputName";
import InputEmail from "./ConsolesForm/InputEmail";
import InputScreenshot from "./ConsolesForm/InputScreenshot";
import InputCheckbox from "./ConsolesForm/InputCheckbox";

function ConsolesForm() {
  return (
    <form className="flex flex-col text-white mb-17 md:w-115">
      <InputName />
      <InputEmail />
      <InputScreenshot />
      <Button isSecondary type="submit" className="w-45 mb-3 lg:w-48">
        Отправить
      </Button>
      <InputCheckbox />
    </form>
  );
}

export default ConsolesForm;
