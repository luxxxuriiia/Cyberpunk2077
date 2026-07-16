import { useState, useEffect } from "react";

import heroBg1 from "../../assets/images/Hero/heroBg1.jpg";
import heroBg2 from "../../assets/images/Hero/heroBg2.png";
import heroBg3 from "../../assets/images/Hero/heroBg3.jpg";

//Arr backgrounds
const images = [heroBg1, heroBg2, heroBg3];

//Responsive 1024px
const lg = {
  backgroundImg: "lg:h-250",
};

function HeroBackground() {
  // States
  const [active, setActive] = useState(0);

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

  //ui
  return (
    <img
      src={images[active]}
      className={`absolute h-178 w-full object-cover phone:h-190 ${lg.backgroundImg}`}
      alt=""
    />
  );
}

export default HeroBackground;
