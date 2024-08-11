import { useState } from "react";
import { storyDataStep } from "./storyData";
import { StoryScreen } from "./StoryScreen";
import { StoryStep } from "./StoryStep";

export const StorySection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="relative ">
      <div className="absolute bottom-0 top-0 z-50 m-auto">
        <StoryStep currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
      {storyDataStep[currentStep] && (
        <StoryScreen storyStep={storyDataStep[currentStep]} />
      )}
    </div>
  );
};
