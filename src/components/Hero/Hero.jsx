import HeroBackground from "./HeroBackground";
import HeroLogo from "./HeroLogo";
import HeroSocial from "./HeroSocial";
import HeroPromo from "./HeroPromo";

//768px
const md = {
  heroContainer: "md:px-9",
  heroItems: "md:items-end",
  heroNavigation: "md:flex-row md:justify-between md:px-0",
};

// 1024px
const lg = {
  heroSection: "lg:h-250",
  heroItems: "lg:h-250",
};

function Hero() {
  return (
    <section className={`relative overflow-hidden ${lg.heroSection}`}>
      <HeroBackground />

      <div
        className={`relative z-10 phone:container phone:mx-auto ${md.heroContainer}`}
      >
        <div
          className={`flex flex-col justify-between h-190 phone:items-center ${md.heroItems} ${lg.heroItems}`}
        >
          <nav
            className={`flex flex-col items-center px-3 mt-5 w-full ${md.heroNavigation}`}
          >
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
