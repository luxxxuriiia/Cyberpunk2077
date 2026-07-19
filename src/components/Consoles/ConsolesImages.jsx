import xbox from "../../assets/images/Consoles/xbox.png";
import playstation from "../../assets/images/Consoles/playstation.png";

function ConsolesImages() {
  return (
    <div className="flex justify-between w-full pb-6 absolute top-13 phone:justify-center lg:flex-col lg:pb-0 lg:items-center lg:top-25 2xl:flex-row 2xl:top-70 2xl:left-22">
      <img
        src={xbox}
        alt="xbox"
        className="w-33 md:w-50 lg:w-115 2xl:absolute 2xl:right-108"
      />
      <img
        src={playstation}
        alt="playstation"
        className="w-33 md:w-50 lg:w-115 lg:absolute lg:top-100 2xl:static"
      />
    </div>
  );
}

export default ConsolesImages;
