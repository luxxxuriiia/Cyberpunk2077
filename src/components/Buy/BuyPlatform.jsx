import platforms from "../../assets/icons/platforms.svg";

// 1024px
const lg = {
  subtitle: "lg:text-2xl",
  platforms: "lg:w-80",
};

function BuyPlatform() {
  return (
    <div>
      <h2 className={`mt-10 text-xl font-bold text-span ${lg.subtitle}`}>
        Выберите платформу:
      </h2>
      <img
        className={`mt-6.5 mb-17.5 w-74 ${lg.platforms}`}
        src={platforms}
        alt="platforms"
      />
    </div>
  );
}

export default BuyPlatform;
