import logo from "/assets/welcome/logo.png";
import hero from "/assets/welcome/hero.png";
import arrowDown from "/assets/ui/arrowDown.png";
import heroMobile from "/assets/welcome/heroMobile.png";
import islandLeft from "/assets/welcome/islandLeft.png";
import islandRight from "/assets/welcome/islandRight.png";
import backgroundImg from "/assets/welcome/sky.jpg";

export const WelcomeScreen: React.FC = () => {
  return (
    <div className="relative -z-10">
      <div>
        <img
          src={islandRight}
          alt=""
          className="animate-up-down-slower absolute right-0 top-0 w-[750px]"
        />
      </div>
      <div>
        <img
          src={islandLeft}
          alt=""
          className="animate-up-down-slow absolute bottom-0 w-[400px] md:w-[550px]  "
        />
      </div>
      <div>
        <img
          src={hero}
          alt=""
          className="animate-up-down absolute right-0 hidden w-[550px] sm:block "
        />
        <img
          src={heroMobile}
          alt=""
          className="animate-up-down absolute right-0 block w-[340px] sm:hidden"
        />
      </div>
      <div>
        <img
          src={logo}
          alt=""
          className="animate-reflect-fade absolute left-0 right-0 m-auto h-80 transform object-cover opacity-30 md:h-96"
        />
      </div>
      <div>
        {" "}
        {/* TO ADD : cursor-pointer + animation + hover*/}
        <img
          src={arrowDown}
          alt=""
          className="absolute bottom-20 left-0 right-0 z-50 m-auto h-10 cursor-pointer object-cover hover:scale-150 md:h-10 "
        />
      </div>
      {/*<div className="absolute bottom-20 left-0 right-0 m-auto  w-[600px] rounded-xl border-2 border-amber-400 p-1 ">
        <div className=" rounded-xl border-2 border-amber-400 bg-gradient-to-tl from-slate-600 via-gray-600 to-slate-900 p-5 px-10 font-semibold text-white ">
          An epic adventure awaits in the Legend of Zelda: Tears of the Kingdom
          game, only on the Nintendo Switch system. In this sequel to the Legend
          of Zelda: Breath of the Wild game, you’ll decide your own path through
          the sprawling landscapes of Hyrule and the mysterious islands floating
          in the vast skies above. Can you harness the power of Link’s new
          abilities to fight back against the malevolent forces that threaten
          the kingdom?
        </div>
      </div>*/}
      <div>
        <img
          src={backgroundImg}
          alt=""
          className="object-right-center h-[calc(100vh)] w-screen object-cover"
        />
      </div>
    </div>
  );
};
