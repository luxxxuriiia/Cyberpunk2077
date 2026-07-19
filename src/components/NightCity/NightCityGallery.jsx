import img3 from "../../assets/images/NightCity/img3.png";
import NightCityTwoImage from "./NightCityTwoImage";

// 768px
const md = {
  items: "md:items-center",
  lastImage: "md:w-174",
};

// 1024px
const lg = {
  lastImage: "lg:w-238",
};

// 1280px
const xl = {
  items: "xl:flex-row xl:items-start xl:gap-8 ",
  lastImage: "xl:w-197",
};

function NightCityGallery() {
  return (
    <div className={`mb-17 flex flex-col space-y-8 ${md.items} ${xl.items}`}>
      <NightCityTwoImage />
      <div className="flex justify-center gap-8">
        <img
          className={`octagon h-106 w-115 object-cover ${md.lastImage} ${lg.lastImage} ${xl.lastImage}`}
          src={img3}
          alt="thirdImage"
        />
      </div>
    </div>
  );
}

export default NightCityGallery;
