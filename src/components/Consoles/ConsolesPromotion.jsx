import Paragraph from "../common/Paragraph";
import Span from "../common/Span";
import Title from "../common/Title";

function ConsolesPromotion() {
  return (
    <div className="flex flex-col items-start pb-17 pt-35 lg:pt-4 lg:pb-24 2xl:pb-30">
      <Title isSecondary className="mb-6 2xl:absolute 2xl:top-15 2xl:left-40">
        Играй и выигрывай!
      </Title>
      <Paragraph className=" text-white 2xl:w-238">
        Играй в <Span>Cyberpunk 2077</Span> и получи возможность выиграть
        консоль <Span>Xbox Series X</Span> или <Span>Sony PlayStation 5!</Span>
        Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша
        будут подведены 1 февраля. Удачи! 😁
      </Paragraph>
    </div>
  );
}

export default ConsolesPromotion;
