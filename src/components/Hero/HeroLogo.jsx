import heroLogo from "../../assets/icons/heroLogo.svg";

// 768px
const md = {
  logo: "md:w-full",
};

function HeroLogo() {
  return (
    <ul className="flex justify-center">
      <li>
        <a href="#">
          <img className={`w-50 ${md.logo}`} src={heroLogo} alt="" />
        </a>
      </li>
    </ul>
  );
}

export default HeroLogo;
