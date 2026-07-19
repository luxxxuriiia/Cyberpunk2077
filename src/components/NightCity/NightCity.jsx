import NightCityDescription from "./NightCityDescription";
import NightCityGallery from "./NightCityGallery";

// 1024px
const lg = {
  nightCityItems: "lg:px-9",
};

// 1536px
const twoXl = {
  nightCityItems: "2xl:px-0",
};

function NightCity() {
  return (
    <section
      className={`container mx-auto max-w-7xl ${lg.nightCityItems} ${twoXl.nightCityItems}`}
    >
      <NightCityDescription />
      <NightCityGallery />
    </section>
  );
}

export default NightCity;
