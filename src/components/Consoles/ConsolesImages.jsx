import xbox from "../../assets/images/Consoles/xbox.png";
import playstation from "../../assets/images/Consoles/playstation.png";

// 425px
const phone = {
  items: "phone:justify-center",
};

// 768px
const md = {
  items: "md:*:w-50",
};

// 1024px
const lg = {
  items: "lg:flex-col lg:pb-0 lg:items-center lg:top-25 lg:*:w-115",
  playstationImage: "lg:absolute lg:top-100 ",
};

// 1536px
const xxL = {
  items: "2xl:flex-row 2xl:top-70 2xl:left-22",
  xboxImage: "2xl:absolute 2xl:right-108",
  playstationImage: "2xl:static",
};

function ConsolesImages() {
  return (
    <div
      className={`flex justify-between w-full pb-6 absolute top-13 *:w-33 ${phone.items} ${md.items} ${lg.items} ${xxL.items}`}
    >
      <img src={xbox} alt="xbox" className={`${xxL.xboxImage}`} />
      <img
        src={playstation}
        alt="playstation"
        className={`${lg.playstationImage} ${xxL.playstationImage}`}
      />
    </div>
  );
}

export default ConsolesImages;
