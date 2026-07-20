import BuyComplect from "./BuyComplect";
import Title from "../common/Title";
import BuyPlatform from "./BuyPlatform";

// 768px
const md = {
  items: "md:px-8",
  title: "md:mt-17.5",
};

// 1024px
const lg = {
  title: "lg:w-156",
};

function BuyInformation() {
  return (
    <div className={`bg-black px-3 ${md.items}`}>
      <Title isSecondary className={`mt-10 ${md.title} ${lg.title}`}>
        Купить игру Cyberpunk 2077
      </Title>
      <BuyComplect />
      <BuyPlatform />
    </div>
  );
}

export default BuyInformation;
