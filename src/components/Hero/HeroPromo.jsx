import Button from "../common/Button";
import Title from "../common/Title";

// 425px
const phone = {
  promo: "phone:w-80",
};

// 1024px
const lg = {
  promo: "lg:w-156",
  items: "lg:items-start",
  title: "lg:w-121 lg:text-left lg:pt-17 lg:pb-6",
  button: "lg:mb-17 lg:text-2xl lg:py-6",
};

function HeroPromo() {
  return (
    <div
      className={`w-full bg-primary octagon flex flex-col items-center ${phone.promo} ${lg.promo}`}
    >
      <div className={`flex flex-col items-center ${lg.items}`}>
        <Title className={`py-7 w-3xs text-center ${lg.title}`}>
          Доступно на всех платформах
        </Title>
        <div>
          <Button className={`mb-7 text-xl py-4 ${lg.button}`}>
            Узнать больше
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroPromo;
