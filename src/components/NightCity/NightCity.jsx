import NightCityDescription from "./NightCityDescription";
import NightCityGallery from "./NightCityGallery";

function NightCity() {
  return (
    <section className="container mx-auto max-w-7xl lg:px-9 2xl:px-0">
      <NightCityDescription />
      <NightCityGallery />
    </section>
  );
}

export default NightCity;
