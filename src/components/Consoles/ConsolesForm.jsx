import Button from "../common/Button";
import InputName from "./ConsolesForm/InputName";
import InputEmail from "./ConsolesForm/InputEmail";
import InputScreenshot from "./ConsolesForm/InputScreenshot";
import InputCheckbox from "./ConsolesForm/InputCheckbox";
import { useState } from "react";

// 768px
const md = {
  form: "md:w-115",
};

// 1024px
const lg = {
  button: "lg:w-48 lg:text-lg lg:py-4",
};

function ConsolesForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [personalData, setPersonalData] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !screenshot || !personalData) {
      alert("Заполните все поля");
      return;
    }

    alert("Форма заполнена!");
    setName("");
    setEmail("");
    setScreenshot(null);
    setPersonalData(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mb-17 flex flex-col text-white ${md.form}`}
    >
      <InputName value={name} onChange={(e) => setName(e.target.value)} />
      <InputEmail value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputScreenshot
        file={screenshot}
        onChange={(e) => setScreenshot(e.target.files[0])}
      />
      <Button
        isSecondary
        type="submit"
        className={`mb-3 w-45 py-4.5 ${lg.button}`}
      >
        Отправить
      </Button>
      <InputCheckbox
        checked={personalData}
        onChange={(e) => setPersonalData(e.target.checked)}
      />
    </form>
  );
}

export default ConsolesForm;
