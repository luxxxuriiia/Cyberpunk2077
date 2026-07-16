import HeroBackground from "./HeroBackground";
import HeroSocial from "./HeroSocial";
import HeroLogo from "./HeroLogo";
import HeroPromo from "./HeroPromo";

function Hero() {
  return (
    <section className="relative overflow-hidden lg:h-1000 ">
      <HeroBackground />

      <div className="relative z-10 phone:container phone:mx-auto md:px-9">
        <div className="flex flex-col justify-between h-190 phone:items-center md:items-end lg:h-250">
          <nav className="flex flex-col items-center px-3 mt-5 w-full md:flex-row md:justify-between ">
            <HeroLogo />
            <HeroSocial />
          </nav>

          <HeroPromo />
        </div>
      </div>
    </section>
  );
}

export default Hero;
