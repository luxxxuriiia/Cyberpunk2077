import heroLogo from "../../assets/icons/heroLogo.svg";

function HeroLogo() {
  return (
    <ul className="flex justify-center">
      <li>
        <a href="#">
          <img className="w-50 md:w-full" src={heroLogo} alt="" />
        </a>
      </li>
    </ul>
  );
}

export default HeroLogo;
