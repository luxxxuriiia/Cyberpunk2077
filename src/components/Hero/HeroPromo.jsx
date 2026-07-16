import Button from "../common/Button";
import Title from "../common/Title";

function HeroPromo() {
  return (
    <div>
      <div className="w-full bg-heroPromo bg-no-repeat bg-cover flex flex-col items-center phone:w-80 lg:w-156">
        <div className="flex flex-col items-center lg:items-start">
          <Title className="py-7 w-3xs text-center lg:w-121 lg:text-left lg:pt-17 lg:pb-6">
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
