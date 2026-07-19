import Paragraph from "../common/Paragraph";
import Span from "../common/Span";
import Title from "../common/Title";

// 1024px
const lg = {
  items: "lg:pt-4 lg:pb-24",
};

// 1536px
const xxL = {
  items: "2xl:pb-30",
  title: "2xl:absolute 2xl:top-15 2xl:left-40",
  paragraph: "2xl:w-238",
};

function ConsolesPromotion() {
  return (
    <div
      className={`flex flex-col items-start pt-35 pb-17 ${lg.items} ${xxL.items}`}
    >
      <Title isSecondary className={`mb-6 ${xxL.title}`}>
        Играй и выигрывай!
      </Title>
      <Paragraph className={`text-white ${xxL.paragraph}`}>
        Играй в <Span>Cyberpunk 2077</Span> и получи возможность выиграть
        консоль <Span>Xbox Series X</Span> или <Span>Sony PlayStation 5!</Span>
        Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша
        будут подведены 1 февраля. Удачи! 😁
      </Paragraph>
    </div>
  );
}

export default ConsolesPromotion;
