import youtube from "../../assets/icons/youtube.svg";
import vk from "../../assets/icons/vk.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import twitch from "../../assets/icons/twitch.svg";
import instagram from "../../assets/icons/instagram.svg";

const socialMedia = [youtube, vk, facebook, twitter, twitch, instagram];

function HeroSocial() {
  return (
    <ul className="flex justify-center space-x-7 mt-2 lg:space-x-10">
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
