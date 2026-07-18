import img3 from "../../assets/images/NightCity/img3.png";
import NightCityTwoImage from "./NightCityTwoImage";

// 768px
const md = {
  items: "md:items-center",
  lastImage: "md:w-188",
};

// 1024px
const lg = {
  lastImage: "lg:w-238",
};

// 1280px
const xl = {
  items: "xl:flex-row xl:gap-8 xl:mx-9 xl:items-start",
  lastImage: "xl:w-197",
};

function NightCityGallery() {
  return (
    <div className={`flex flex-col space-y-8 mb-17 ${md.items} ${xl.items}`}>
      <NightCityTwoImage />
      <div className="flex justify-center gap-8">
        <img
          className={`h-106 object-cover w-115 octagon ${md.lastImage} ${lg.lastImage} ${xl.lastImage}`}
          src={img3}
          alt="thirdImage"
        />
      </div>
    </div>
  );
}

export default NightCityGallery;
