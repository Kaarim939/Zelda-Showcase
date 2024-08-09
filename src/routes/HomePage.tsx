import { WeaponsSection } from "../components/Weapons/WeaponsSection";
import { CharactersScreen } from "../components/Characters/CharactersScreen";
import { WelcomeScreen } from "../components/Welcome/WelcomeScreen";
import { WorldMap } from "../components/Map/WorldMap";
import { Footer } from "../components/Footer/Footer";
import { StorySection } from "../components/Story/StorySection";
import { SectionBase } from "../components/SectionBase";

export const HomePage: React.FC = () => {
  return (
    <div>
      <WelcomeScreen />
      <SectionBase title="STORY" section={<StorySection />} />
      <SectionBase title="CHARACTERS" section={<CharactersScreen />} />
      <SectionBase title="WORLD MAP" section={<WorldMap />} />
      <SectionBase title="WEAPONS" section={<WeaponsSection />} />
      <Footer />
    </div>
  );
};
