import { WeaponsSection } from "../components/Weapons/WeaponsSection";
import { CharactersScreen } from "../components/Characters/CharactersScreen";
import { WelcomeScreen } from "../components/Welcome/WelcomeScreen";
import { WorldMap } from "../components/Map/WorldMap";
import { Footer } from "../components/Footer/Footer";
import { StoryScreen } from "../components/Story/StoryScreen";
import { storyDataStep } from "../components/Story/storyData";

export const HomePage: React.FC = () => {
  return (
    <div>
      <WelcomeScreen />
      {storyDataStep[1] && <StoryScreen storyStep={storyDataStep[1]} />}
      <CharactersScreen />
      <WeaponsSection />
      <WorldMap />
      <Footer />
    </div>
  );
};
