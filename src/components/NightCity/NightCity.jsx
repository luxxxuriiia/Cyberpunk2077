import NightCityDescription from "./NightCityDescription";
import NightCityGallery from "./NightCityGallery";

// 1024px
const lg = {
  items: "lg:px-9",
};

// 1536px
const xxL = {
  items: "2xl:px-0",
};

function NightCity() {
  return (
    <section className={`container mx-auto max-w-7xl ${lg.items} ${xxL.items}`}>
      <NightCityDescription />
      <NightCityGallery />
    </section>
  );
}

export default NightCity;
