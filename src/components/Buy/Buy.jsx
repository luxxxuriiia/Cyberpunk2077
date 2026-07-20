import BuyInformation from "./BuyInformation";

import background from "../../assets/images/Buy/background.jpg";

// 425px
const phone = {
  section: "phone:flex-row",
  background: "phone:h-147 phone:w-[33%]",
};

// 1024px
const lg = {
  background: "lg:h-179",
};

// 1536px
const xxL = {
  background: "2xl:w-[50%]",
};

function Buy() {
  return (
    <section className={`flex flex-col bg-black ${phone.section}`}>
      <img
        className={`h-49.5 w-full object-cover ${phone.background} ${lg.background} ${xxL.background}`}
        src={background}
        alt="background"
      />
      <BuyInformation />
    </section>
  );
}

export default Buy;
