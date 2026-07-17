import Button from "../common/Button";
import Title from "../common/Title";

// 1024px
const lg = {
  promo: "lg:w-156",
  promoItems: "lg:items-start",
  promoTitle: "lg:w-121 lg:text-left lg:pt-17 lg:pb-6",
  promoButton: "lg:mb-17",
};

function HeroPromo() {
  return (
    <div
      className={`w-full bg-heroPromo bg-no-repeat bg-cover flex flex-col items-center phone:w-80 ${lg.promo}`}
    >
      <div className={`flex flex-col items-center ${lg.promoItems}`}>
        <Title className={`py-7 w-3xs text-center ${lg.promoTitle}`}>
          Доступно на всех платформах
        </Title>
        <div>
          <Button className={`mb-7 ${lg.promoButton}`}>Узнать больше</Button>
        </div>
      </div>
    </div>
  );
}

export default HeroPromo;
