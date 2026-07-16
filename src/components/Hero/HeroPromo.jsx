import Button from "../common/Button";
import Title from "../common/Title";

const lg = {
  divItems: "lg:items-start",
  Title: "lg:w-121 lg:text-left lg:pt-17 lg:pb-6",
};

const flexColCenter = "flex flex-col items-center";

function HeroPromo() {
  return (
    <div>
      <div
        className={`${flexColCenter} w-full bg-heroPromo bg-no-repeat bg-cover phone:w-80 lg:w-156`}
      >
        <div className={`${flexColCenter} ${lg.divItems}`}>
          <Title className={`py-7 w-3xs text-center ${lg.Title}`}>
            Доступно на всех платформах
          </Title>
          <div>
            <Button className="mb-7 lg:mb-17">Узнать больше</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPromo;
