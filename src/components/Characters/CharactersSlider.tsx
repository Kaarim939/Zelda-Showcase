import { charactersData } from "./CharactersData";
import backIcon from "/assets/ui/littleLeftArrow.png";

export const CharactersSlider: React.FC<{
  characterSelected: number;
  changeCharacter: (chara: number) => void;
  handleClick: () => void;
  backButton?: () => void;
}> = ({ characterSelected, changeCharacter, handleClick, backButton }) => {
  return (
    <div
      className={`bg-[#332927] 
    bg-[url('/assets/ui/backSquareOp.png')] bg-[length:400px_400px] bg-repeat ${backButton ? "pt-7" : "py-2"} `}
    >
      {backButton && (
        <img src={backIcon} alt="" className="m-2" onClick={backButton} />
      )}
      <div
        className="m-auto flex grow flex-wrap justify-between gap-2 gap-y-2 
      p-2 px-3 xl:gap-x-20  xl:px-10 2xl:gap-x-10"
      >
        {charactersData.map((chara) => {
          return (
            <>
              <div
                key={chara.id}
                className={`rounded-xl ${characterSelected === chara.id ? "bg-white " : "bg-black"} 
                cursor-pointer border border-white border-opacity-20 
                bg-opacity-30 bg-[url('/assets/ui/backLabOp.png')] bg-[length:400px_400px] bg-repeat shadow-2xl`}
                onClick={() => {
                  changeCharacter(chara.id);
                  handleClick();
                }}
              >
                <img
                  src={chara.imgMini}
                  alt=""
                  className="h-16 w-max rounded-xl xl:h-20 "
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
