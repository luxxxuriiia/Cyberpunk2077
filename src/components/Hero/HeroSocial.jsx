import youtube from "../../assets/icons/youtube.svg";
import vk from "../../assets/icons/vk.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import twitch from "../../assets/icons/twitch.svg";
import instagram from "../../assets/icons/instagram.svg";

//Arr icons
const socialMedia = [youtube, vk, facebook, twitter, twitch, instagram];

// 768px
const md = {
  items: "md:mt-0",
};

function HeroSocial() {
  return (
    <ul className={`flex justify-center space-x-7 px-3 mt-2 ${md.items}`}>
      {socialMedia.map((social) => (
        <li>
          <a href="#">
            <img src={social} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default HeroSocial;
