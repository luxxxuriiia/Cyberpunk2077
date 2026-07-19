import ConsolesPromotion from "./ConsolesPromotion";
import ConsolesForm from "./ConsolesForm";
import ConsolesImages from "./ConsolesImages";
import spray from "../../assets/images/Consoles/spray.png";
import promo from "../../assets/images/Consoles/promo.svg";

// 768px
const md = {
  consolesContainer: "md:px-9",
};

// 1024px
const lg = {
  consolesContainer: "lg:grid lg:grid-cols-2 lg:px-9",
  imagesBlock: "lg:col-start-2",
};

// 1536px
const twoXl = {
  consolesContainer: "2xl:px-0",
};

function Consoles() {
  return (
    <section className="bg-black">
      <img className="w-full h-17 object-cover" src={spray} alt="" />
      <div
        className={`container max-w-7xl mx-auto px-3 ${md.consolesContainer} ${lg.consolesContainer} ${twoXl.consolesContainer}`}
      >
        <div className={`relative ${lg.imagesBlock}`}>
          <ConsolesImages />
        </div>
        <div className={`relative 2xl:col-span-2`}>
          <img src={promo} alt="" className="mt-2 md:w-33" />

          <ConsolesPromotion />
          <ConsolesForm />
        </div>
      </div>
      <img className="w-full h-17 object-cover rotate-180" src={spray} alt="" />
    </section>
  );
}

export default Consoles;
