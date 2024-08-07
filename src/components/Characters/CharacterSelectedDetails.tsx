import { ICharacterData } from "./CharactersData";
import { CharactersDescription } from "./CharactersDescription";

export const CharacterSelectedDetails: React.FC<{
  character: ICharacterData;
  characterSelected: number;
}> = ({ characterSelected, character }) => {
  return (
    <>
      <div className="animate-flashy-zoom absolute right-0 top-0 h-full">
        <img
          src={character.circleLogo}
          alt=""
          className={`animate-rotation h-[700px] object-contain md:h-[1000px]`}
        />
      </div>
      <img
        src={character.imgFull}
        alt=""
        className={`animate-fadeInOpacity absolute right-0 top-0 hidden w-[1200px] opacity-10 md:block `}
      />
      <div className="absolute bottom-3 left-3 z-50 hidden max-w-[400px] md:block lg:bottom-10 lg:left-20 lg:max-w-[600px]">
        <CharactersDescription characterSelected={characterSelected} />
      </div>
    </>
  );
};
