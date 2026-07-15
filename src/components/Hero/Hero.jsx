import HeroBackground from "./HeroBackground";
import HeroSocial from "./HeroSocial";
import HeroLogo from "./HeroLogo";
import HeroPromo from "./HeroPromo";

function Hero() {
  return (
    <section className="relative h-177 overflow-hidden lg:h-1000 ">
      <HeroBackground />

      <div className="relative z-10 2xl:container 2xl:mx-auto">
        <div className="flex flex-col  phone:px-5 lg:px-9">
          <nav className="flex flex-col px-3 md:flex-row md:items-center md:justify-between">
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
