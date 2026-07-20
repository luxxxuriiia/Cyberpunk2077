import Paragraph from "../common/Paragraph";

import code from "../../assets/icons/code.svg";
import disk from "../../assets/icons/disk.svg";
import collections from "../../assets/icons/collections.svg";

// 768px
const md = {
  list: "md:*:[&_img]:w-8",
};

// 1024px
const lg = {
  subtitle: "lg:text-2xl",
};

function BuyComplect() {
  return (
    <div>
      <h2 className={`mt-6 text-xl font-bold text-span ${lg.subtitle}`}>
        В комплект входит:
      </h2>
      <ul
        className={`mt-5 space-y-4 *:flex *:items-center *:[&_img]:w-6 *:[&_p]:ml-4.5 *:[&_p]:leading-none *:[&_p]:text-white ${md.list} `}
      >
        <li>
          <img src={disk} alt="disk" />
          <Paragraph>Футляр с игровыми дисками</Paragraph>
        </li>
        <li>
          <img src={code} alt="code" />
          <Paragraph>Футляр с кодом для загрузки игры и дисками (pc)</Paragraph>
        </li>
        <li>
          <img src={collections} alt="collections" />
          <Paragraph>Справочник с информацией об игровом мире</Paragraph>
        </li>
      </ul>
    </div>
  );
}

export default BuyComplect;
