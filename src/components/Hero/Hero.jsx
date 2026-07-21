import HeroBackground from "./HeroBackground";
import HeroLogo from "./HeroLogo";
import HeroSocial from "./HeroSocial";
import HeroPromo from "./HeroPromo";

// 425px
const phone = {
  items: "phone:items-center",
};

//768px
const md = {
  container: "md:px-9",
  items: "md:items-end",
  navigation: "md:flex-row md:justify-between md:px-0",
};

// 1024px
const lg = {
  hero: "lg:h-250",
  items: "lg:h-250",
};

// 1280px
const xl = {
  container: "xl:px-0",
};

function Hero() {
  return (
    <section id="hero" className={`relative overflow-hidden ${lg.hero}`}>
      <HeroBackground />

      <div
        className={`relative z-10 container mx-auto max-w-7xl ${md.container} ${xl.container}`}
      >
        <div
          className={`flex h-190 flex-col justify-between ${phone.items} ${md.items} ${lg.items}`}
        >
          <nav
            className={`mt-5 flex w-full flex-col items-center px-3 ${md.navigation}`}
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
