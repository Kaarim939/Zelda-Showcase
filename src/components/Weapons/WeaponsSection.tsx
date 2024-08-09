import { SectionTitle } from "../SectionTitle";
import { WeaponCard } from "./WeaponsCard";
import { weaponsData } from "./weaponsData";

export const WeaponsSection: React.FC = () => {
  return (
    <div className="bg-slate-500 ">
      <SectionTitle title="WEAPONS" />
      <div className="flex flex-wrap justify-around gap-2 bg-[url('/assets/ui/backSquareOp.png')] bg-[length:400px_400px] bg-repeat py-12 md:gap-10">
        {weaponsData.map((weapon, index) => (
          <div key={index} className="shadow-2xl">
            <WeaponCard weapon={weapon} />
          </div>
        ))}
      </div>
    </div>
  );
};
