import colors from "../../assets/icons/colors.svg";
import awesome from "../../assets/icons/awesome.svg";
import motion from "../../assets/icons/motion.svg";

import Paragraph from "../common/Paragraph";

function AdvertisementList() {
  return (
    <ul className="mt-6 space-y-4 *:flex *:items-center *:[&_img]:mr-4 *:[&_img]:w-6">
      <li>
        <img src={colors} alt="" />
        <Paragraph>Яркие насыщенные цвета</Paragraph>
      </li>
      <li>
        <img src={awesome} alt="" />
        <Paragraph className="leading-none">
          Кристальная четкость изображения
        </Paragraph>
      </li>
      <li>
        <img src={motion} alt="" />
        <Paragraph className="leading-none">
          Быстрые движения и плавный геймплей
        </Paragraph>
      </li>
    </ul>
  );
}

export default AdvertisementList;
