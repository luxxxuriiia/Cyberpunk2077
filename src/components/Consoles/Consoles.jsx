import ConsolesPromotion from "./ConsolesPromotion";
import ConsolesForm from "./ConsolesForm";
import ConsolesImages from "./ConsolesImages";
import spray from "../../assets/images/Consoles/spray.png";
import promo from "../../assets/images/Consoles/promo.svg";

// 768px
const md = {
  container: "md:px-9",
  offerImage: "md:w-33",
};

// 1024px
const lg = {
  container: "lg:grid lg:grid-cols-2 lg:px-9",
  sprites: "lg:col-start-2",
};

// 1536px
const xxL = {
  container: "2xl:px-0",
  offer: "2xl:col-span-2",
};

function Consoles() {
  return (
    <section className="bg-black">
      <img className="object-cover w-full h-17" src={spray} alt="" />
      <div
        className={`container mx-auto max-w-7xl px-3 ${md.container} ${lg.container} ${xxL.container}`}
      >
        <div className={`relative ${lg.sprites}`}>
          <ConsolesImages />
        </div>
        <div className={`relative ${xxL.offer}`}>
          <img src={promo} alt="" className={`mt-2 ${md.offerImage}`} />

          <ConsolesPromotion />
          <ConsolesForm />
        </div>
      </div>
      <img className="object-cover w-full rotate-180 h-17" src={spray} alt="" />
    </section>
  );
}

export default Consoles;
