import AdvertisementSponsors from "./AdvertisementSponsors";
import AdvertisementDescription from "./AdvertisementDescription";

// 1024px
const lg = {
  container: "lg:px-9",
  items: "lg:grid-cols-2",
};

// 1536px
const xxL = {
  container: "2xl:px-0",
};

function Advertisement() {
  return (
    <section className="bg-primary">
      <div
        className={`container mx-auto max-w-7xl px-3 ${lg.container} ${xxL.container}`}
      >
        <div className={`grid grid-cols-1 py-17.5 ${lg.items}`}>
          <AdvertisementSponsors />
          <AdvertisementDescription />
        </div>
      </div>
    </section>
  );
}

export default Advertisement;
