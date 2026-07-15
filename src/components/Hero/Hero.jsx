import { useEffect, useState } from "react";

import heroLogo from "../../assets/icons/heroLogo.svg";
import youtube from "../../assets/icons/youtube.svg";
import vk from "../../assets/icons/vk.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import twitch from "../../assets/icons/twitch.svg";
import instagram from "../../assets/icons/instagram.svg";

import heroBg1 from "../../assets/images/Hero/heroBg1.jpg";
import heroBg2 from "../../assets/images/Hero/heroBg2.png";
import heroBg3 from "../../assets/images/Hero/heroBg3.jpg";

function Hero() {
  // States
  const [active, setActive] = useState(0);

  // Derived data
  const images = [heroBg1, heroBg2, heroBg3];

  // Actions
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = prev + 1;
        return next >= images.length ? 0 : next;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-177 overflow-hidden">
      <img
        src={images[active]}
        className="absolute h-160 w-full object-cover "
        alt=""
      />

      {/* 5. Контент */}
      <div className="relative z-10">
        <div className="mx-auto">
          <nav className="flex flex-col px-3">
            <ul className="flex justify-center mt-5">
              <li>
                <a href="#">
                  <img src={heroLogo} alt="" width="200px" />
                </a>
              </li>
            </ul>
            <ul className="flex justify-center space-x-7 mt-2">
              <li>
                <a href="#">
                  <img src={youtube} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={vk} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitch} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-100 bg-primary flex flex-col items-center [clip-path:polygon(10%_0%,100%_0%,100%_80%,90%_100%,0%_100%,0%_20%)]">
            <h1 className="w-3xs text-3xl mt-7 mb-7 text-center font-archangelsk leading-none">
              Доступно на всех платформах
            </h1>
            <button className="text-xl bg-black text-primary py-3 px-12 mb-7 font-semibold font-roboto">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
