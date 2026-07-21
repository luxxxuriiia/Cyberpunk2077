import logo from "../../assets/icons/logo.svg";
import cdprojekt from "../../assets/icons/cdprojekt.svg";

import Paragraph from "../common/Paragraph";

// 768px
const md = {
  container: "md:px-9",
  left: "md:flex-row md:space-y-0 md:space-x-8 md:*:h-18.5",
  right: "md:mt-0 md:mb-0 md:h-25 md:flex-row md:space-y-0 md:space-x-8",
};

// 1024px
const lg = {
  items: "lg:flex-row lg:justify-between",
  left: "lg:mt-0",
};

function Footer() {
  return (
    <footer>
      <div className={`container mx-auto max-w-7xl ${md.container} xl:px-0`}>
        <div className={`flex flex-col items-center ${lg.items}`}>
          <div
            className={`mt-10 flex flex-col space-y-6 *:h-12.5 ${md.left} ${lg.left}`}
          >
            <a
              href="#hero"
              className="opacity-100 transition-opacity duration-300 hover:opacity-80"
            >
              <img src={logo} alt="logo" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cdprojekt.com/en/"
              className="opacity-100 transition-opacity duration-300 hover:opacity-80"
            >
              <img src={cdprojekt} alt="cdprojekt" />
            </a>
          </div>
          <ul
            className={`mt-12.5 mb-6 flex flex-col items-center space-y-4 ${md.right}`}
          >
            <Paragraph>Концепт-проект</Paragraph>
            <Paragraph>Создано в образовательных целях</Paragraph>
          </ul>
        </div>
      </div>
      <div className="flex justify-center bg-black">
        <span className="py-3 text-xs text-white">
          © 2026 Concept Project. For educational purposes only. All trademarks
          belong to their respective owners.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
