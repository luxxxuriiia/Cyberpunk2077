import monitor from "../../assets/images/Advertisement/monitor.png";

import hp from "../../assets/icons/hp.svg";
import cross from "../../assets/icons/cross.svg";
import logo from "../../assets/icons/logo.svg";

// 768px
const md = {
  wrapper: "md:w-115",
  icons: "md:mt-6",
  hp: "md:w-20",
  cross: "md:w-22",
  logo: "md:w-80",
};

// 1024px
const lg = {
  items: "lg:mt-10.5",
  icons: "lg:flex-col lg:items-center lg:space-y-6",
};

// 1536px
const xxL = {
  wrapper: "2xl:w-156",
  icons: "2xl:flex-row 2xl:justify-center 2xl:space-y-0 2xl:space-x-6",
};

function AdvertisementSponsors() {
  return (
    <div className={`flex flex-col items-center ${lg.items}`}>
      <div className={`w-74 ${md.wrapper} ${xxL.wrapper}`}>
        <img src={monitor} alt="monitor" />
        <div
          className={`flex w-full justify-between ${md.icons} ${lg.icons} ${xxL.icons}`}
        >
          <img className={`w-11 ${md.hp}`} src={hp} alt="hp" />
          <img className={`w-12 ${md.cross}`} src={cross} alt="cross" />
          <img className={`w-44 ${md.logo}`} src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default AdvertisementSponsors;
