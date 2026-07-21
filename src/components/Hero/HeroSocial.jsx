import youtube from "../../assets/icons/youtube.svg";
import vk from "../../assets/icons/vk.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import twitch from "../../assets/icons/twitch.svg";
import instagram from "../../assets/icons/instagram.svg";

const socialMedia = [
  {
    icon: youtube,
    href: "https://www.youtube.com/@CyberpunkGame",
  },
  {
    icon: vk,
    href: "https://vk.com/cyberpunkgame",
  },
  {
    icon: facebook,
    href: "https://www.facebook.com/groups/Cyberpunk2077/",
  },
  {
    icon: twitter,
    href: "https://x.com/CyberpunkGame",
  },
  {
    icon: twitch,
    href: "https://www.twitch.tv/directory/category/cyberpunk-2077",
  },
  {
    icon: instagram,
    href: "https://www.instagram.com/cyberpunkgame/",
  },
];

// 768px
const md = {
  items: "md:mt-0",
};

function HeroSocial() {
  return (
    <ul className={`mt-2 flex justify-center space-x-7 px-3 ${md.items}`}>
      {socialMedia.map(({ icon, href }) => (
        <li
          key={href}
          className="opacity-100 transition-opacity duration-300 hover:opacity-80"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default HeroSocial;
