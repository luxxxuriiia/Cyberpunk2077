import AdvertisementList from "./AdvertisementList";

import Title from "../common/Title";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";

// 1024px
const lg = {
  items: "lg:ml-8",
  paragraph: "lg:leading-9",
};

function AdvertisementDescription() {
  return (
    <div className={`mt-10 ${lg.items}`}>
      <Title>Полное погружение вместе с HP</Title>
      <Paragraph className={`mt-6 text-black ${lg.paragraph}`}>
        Погрузись в современные экшен-игры с реалистичным изображением с помощью
        монитора с диагональю 23,8 дюйма, созданном для отображения максимально
        насыщенных цветов. Успевай реагировать на любые события с временем
        отклика 1 мс и частотой в 144 Гц!
      </Paragraph>
      <AdvertisementList />
      <Button className="mt-10 py-5">Подробнее</Button>
    </div>
  );
}

export default AdvertisementDescription;
