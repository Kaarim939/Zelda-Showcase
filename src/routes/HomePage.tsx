import { WeaponsSection } from "../components/Weapons/WeaponsSection";
import { CharactersScreen } from "../components/Characters/CharactersScreen";
import { WelcomeScreen } from "../components/Welcome/WelcomeScreen";
import { WorldMap } from "../components/Map/WorldMap";
import { Footer } from "../components/Footer/Footer";
import { SectionBase } from "../components/SectionBase";

// The goal here was to create a simple showcase website for the game The Legend of the Zelda: Tears of the Kingdom

export const HomePage: React.FC = () => {
  return (
    <div>
      <WelcomeScreen />
      {/* Will be added later <SectionBase title="STORY" section={<StorySection />} />*/}
      <SectionBase title="CHARACTERS" section={<CharactersScreen />} />
      <SectionBase title="WORLD MAP" section={<WorldMap />} />
      <SectionBase title="WEAPONS" section={<WeaponsSection />} />
      <Footer />
    </div>
  );
};
