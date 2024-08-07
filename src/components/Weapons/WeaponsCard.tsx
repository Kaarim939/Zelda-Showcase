import { useState } from "react";
import { TransitionBar } from "../TransitionBar";
import { WeaponDisplaySwitch } from "./WeaponDisplaySwitch";
import { IWeapon } from "./weaponsData";
import { WeaponThree } from "./WeaponThree";
import hyruleLogo from "/assets/ui/hyruleLogo.png";

export const WeaponCard: React.FC<{ weapon: IWeapon }> = ({ weapon }) => {
  const [threeDisplay, setThreeDisplay] = useState(true);
  return (
    <div className="lg:40 flex h-full grow flex-col items-center justify-between rounded-lg bg-black bg-opacity-50 p-4 md:px-20">
      <div className="relative">
        <img
          src={hyruleLogo}
          alt=""
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-full object-contain opacity-10"
        />
        <div className="absolute bottom-0 right-0 z-50 m-2">
          <WeaponDisplaySwitch
            threeDisplay={threeDisplay}
            setThreeDisplay={setThreeDisplay}
          />
        </div>
        {threeDisplay ? (
          <div className="z-20 h-[400px] w-[400px] object-contain md:h-[350px] md:w-[350px] 2xl:h-[600px] 2xl:w-[600px]">
            <WeaponThree weaponModel={weapon.model} />
          </div>
        ) : (
          <img
            src={weapon.image}
            alt={weapon.name}
            className="z-20 h-[400px] w-[400px] object-contain md:h-[350px] md:w-[350px]  2xl:h-[600px] 2xl:w-[600px]"
          />
        )}
      </div>
      <div className="flex w-full grow">
        <TransitionBar />
      </div>
      <div className="flex flex-col">
        <div className="text-3xl font-semibold text-white">{weapon.name}</div>
        <div className="w-64 pt-3 text-sm text-white 2xl:w-96">
          {weapon.description}
        </div>
      </div>
    </div>
  );
};
