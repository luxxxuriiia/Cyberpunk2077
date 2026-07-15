import HeroButton from "./HeroButton";
import HeroTitle from "./HeroTitle";

function HeroPromo() {
  return (
    <div className="w-full flex justify-center md:justify-end">
      <div className="w-full mt-100 bg-heroPromo bg-no-repeat bg-cover flex flex-col items-center phone:w-80 md:mt-88 lg:w-156 lg:items-start lg:px-17 lg:mt-139">
        <HeroTitle />
        <HeroButton />
      </div>
    </div>
  );
}

export default HeroPromo;
