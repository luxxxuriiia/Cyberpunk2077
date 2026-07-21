import pc from "../../assets/icons/pc.svg";
import xboxone from "../../assets/icons/xboxone.svg";
import stadia from "../../assets/icons/stadia.svg";
import playstation from "../../assets/icons/playstation.svg";

// 1024px
const lg = {
  subtitle: "lg:text-2xl",
  platforms: "lg:w-80 lg:space-y-12 lg:pr-0",
};

function BuyPlatform() {
  return (
    <div>
      <h2 className={`mt-10 text-xl font-bold text-span ${lg.subtitle}`}>
        Выберите платформу:
      </h2>

      <div className={`mt-6.5 mb-17.5 w-74 space-y-10 pr-3 ${lg.platforms}`}>
        <div className="flex justify-between *:transition-transform *:duration-300 *:hover:scale-110">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
          >
            <img className="h-auto max-w-full" src={pc} alt="PC" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.xbox.com/en-US/games/store/cyberpunk-2077/BX3M8L83BBRW/0001"
          >
            <img className="h-auto max-w-full" src={xboxone} alt="XboxOne" />
          </a>
        </div>
        <div className="flex items-center justify-between *:transition-transform *:duration-300 *:hover:scale-110">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stadia.google.com/gg/"
          >
            <img className="h-auto max-w-full" src={stadia} alt="Stadia" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.playstation.com/en-us/games/cyberpunk-2077/"
          >
            <img
              className="h-auto max-w-full"
              src={playstation}
              alt="PlayStation"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BuyPlatform;
