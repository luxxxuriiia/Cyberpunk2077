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
  function openPlatforms() {
    window.open("https://www.cyberpunk.net/us/ru/buy", "_blank");
  }

  return (
    <div
      className={`octagon flex w-full flex-col items-center bg-primary ${phone.promo} ${lg.promo}`}
    >
      <div className={`flex flex-col items-center ${lg.items}`}>
        <Title className={`w-3xs py-7 text-center ${lg.title}`}>
          Доступно на всех платформах
        </Title>
        <div>
          <Button
            onClick={openPlatforms}
            className={`mb-7 py-4 text-xl ${lg.button}`}
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroPromo;
