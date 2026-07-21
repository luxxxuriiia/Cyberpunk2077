import heroLogo from "../../assets/icons/logo.svg";

// 768px
const md = {
  logo: "md:w-full",
};

function HeroLogo() {
  return (
    <ul className="flex justify-center">
      <li className="opacity-100 transition-opacity duration-300 hover:opacity-80">
        <a href="">
          <img className={`w-50 ${md.logo}`} src={heroLogo} alt="" />
        </a>
      </li>
    </ul>
  );
}

export default HeroLogo;
