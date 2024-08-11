import arrowLeft from "/assets/ui/arrowLongLeft.png";
import arrowRight from "/assets/ui/arrowLongRight.png";

export const TransitionBar: React.FC = () => {
  return (
    <div className="flex grow items-center justify-center">
      <img src={arrowLeft} className="h-2 w-8" />
      <div className="mx-2 my-1 h-0.5 w-full rounded-full bg-[#d0b484]"></div>
      <img src={arrowRight} className="h-2 w-8" />
    </div>
  );
};
