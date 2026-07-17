import img1 from "../../assets/images/NightCity/img1.png";
import img2 from "../../assets/images/NightCity/img2.png";

// 768px
const md = {
  twoImage: "md:flex-row",
  sizeTwoImage: "md:w-90",
};

// 1024px
const lg = {
  twoImage: "lg:justify-center",
  sizeTwoImage: "lg:w-full",
};

// 1280px
const xl = {
  twoImage: "xl:flex-col",
};

function NightCityTwoImage() {
  return (
    <div
      className={`flex flex-col items-center gap-8 ${md.twoImage} ${lg.twoImage} ${xl.twoImage}`}
    >
      <img
        className={`h-49 object-cover ${md.sizeTwoImage} ${lg.sizeTwoImage}`}
        src={img1}
        alt="firstImage"
      />
      <img
        className={`h-49 object-cover ${md.sizeTwoImage} ${lg.sizeTwoImage}`}
        src={img2}
        alt="secondImage"
      />
    </div>
  );
}

export default NightCityTwoImage;
