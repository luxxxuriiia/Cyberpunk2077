import img1 from "../../assets/images/NightCity/img1.png";
import img2 from "../../assets/images/NightCity/img2.png";

// 768px
const md = {
  twoImage: "md:flex-row md:*:w-83",
};

// 1024px
const lg = {
  twoImage: "lg:justify-center lg:*:w-full lg:*:hover:scale-105",
};

// 1280px
const xl = {
  twoImage: "xl:flex-col",
};

function NightCityTwoImage() {
  return (
    <div
      className={`flex flex-col items-center gap-8 *:h-49 *:object-cover *:transition-transform *:duration-300 ${md.twoImage} ${lg.twoImage} ${xl.twoImage}`}
    >
      <img className="octagon" src={img1} alt="firstImage" />
      <img className="octagon" src={img2} alt="secondImage" />
    </div>
  );
}

export default NightCityTwoImage;
