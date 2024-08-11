import logo from "/assets/welcome/logo.png";
import hero from "/assets/welcome/hero.png";
import heroMobile from "/assets/welcome/heroMobile.png";
import islandLeft from "/assets/welcome/islandLeft.png";
import islandRight from "/assets/welcome/islandRight.png";
import backgroundImg from "/assets/welcome/sky.jpg";

// The goal here was just to create a welcome screen with a nice background and some animations to make it more dynamic
// The images are from the original Website

export const WelcomeScreen: React.FC = () => {
  return (
    <div className="relative -z-10">
      <div>
        <img
          src={islandRight}
          className="absolute right-0 top-0 w-[750px] animate-up-down-slower"
        />
      </div>
      <div>
        <img
          src={islandLeft}
          className="absolute bottom-0 w-[400px] animate-up-down-slow md:w-[550px]  "
        />
      </div>
      <div>
        <img
          src={hero}
          className="absolute right-0 hidden w-[550px] animate-up-down sm:block "
        />
        <img
          src={heroMobile}
          className="absolute right-0 block w-[340px] animate-up-down sm:hidden"
        />
      </div>
      <div>
        <img
          src={logo}
          className="absolute left-0 right-0 m-auto h-80 transform animate-reflect-fade object-cover opacity-30 md:h-96"
        />
      </div>
      <div>
        <img
          src={backgroundImg}
          className="object-right-center h-[calc(100vh)] w-screen object-cover"
        />
      </div>
    </div>
  );
};
