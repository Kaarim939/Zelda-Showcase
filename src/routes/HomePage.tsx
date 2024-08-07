import { WeaponsSection } from "../components/Weapons/WeaponsSection";
import { CharactersScreen } from "../components/Characters/CharactersScreen";
import { WelcomeScreen } from "../components/Welcome/WelcomeScreen";

export const HomePage: React.FC = () => {
  return (
    <div>
      <WelcomeScreen />
      <div className="z-50 bg-slate-500 pb-96">
        <CharactersScreen />
        <WeaponsSection />
      </div>
    </div>
  );
};
