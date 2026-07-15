const lg = "lg:mb-17 lg:py-5";

function HeroButton() {
  return (
    <button
      className={`text-xl bg-black text-primary py-3 px-12 mb-7 font-semibold font-roboto ${lg}`}
    >
      Узнать больше
    </button>
  );
}

export default HeroButton;
