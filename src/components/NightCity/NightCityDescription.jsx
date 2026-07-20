import Title from "../common/Title";
import Paragraph from "../common/Paragraph";
import Span from "../common/Span";

// 768px
const md = {
  items: "md:px-9",
};

// 1024px
const lg = {
  items: "lg:px-0",
  title: "lg:w-155",
  paragraph: "lg:w-197",
};

// 1280px
const xl = {
  title: "xl:w-full",
  paragraph: "xl:w-238",
};

function NightCityDescription() {
  return (
    <div className={`px-3 py-17 ${md.items} ${lg.items}`}>
      <Title className={`mb-6 ${lg.title} ${xl.title}`}>
        Найт-Сити изменит тебя навсегда!
      </Title>
      <Paragraph className={`text-secondary ${lg.paragraph} ${xl.paragraph}`}>
        <Span>Cyberpunk 2077</Span> — приключенческая ролевая игра, действие
        которой происходит в мегаполисе Найт-Сити, где власть, роскошь и
        модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках
        устройства, позволяющего обрести бессмертие. Ты сможешь менять
        киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый
        мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
      </Paragraph>
    </div>
  );
}

export default NightCityDescription;
