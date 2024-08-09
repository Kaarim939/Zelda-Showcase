import { storyDataStep } from "./storyData";
import { StoryScreen } from "./StoryScreen";
import { StoryStep } from "./StoryStep";

export const StorySection: React.FC = () => {
  return (
    <div className="relative h-lvh">
      <div className="absolute bottom-0 top-0 m-auto">
        <StoryStep />
      </div>
      {storyDataStep[1] && <StoryScreen storyStep={storyDataStep[1]} />}
    </div>
  );
};
