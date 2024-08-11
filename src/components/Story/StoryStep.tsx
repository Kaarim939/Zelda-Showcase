import { storyDataStep } from "./storyData";

export const StoryStep: React.FC<{
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
}> = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="flex justify-between bg-green-400">
      {currentStep != 0 && (
        <div onClick={() => setCurrentStep(currentStep - 1)}>Gauche</div>
      )}
      {currentStep + 1 != storyDataStep.length && (
        <div onClick={() => setCurrentStep(currentStep + 1)}>Droite</div>
      )}
    </div>
  );
};
