import { useRef, useState } from "react";
import { SectionTitle } from "../SectionTitle";
import { charactersData } from "./CharactersData";
import { CharactersDescription } from "./CharactersDescription";
import { CharacterSelectedDetails } from "./CharacterSelectedDetails";
import { CharactersSlider } from "./CharactersSlider";
import charactersIcon from "/assets/ui/characters.png";

export const CharactersScreen: React.FC = () => {
  const screenWeight = window.innerWidth;
  const [characterSelected, setCharacterSelected] = useState<
    undefined | number
  >(screenWeight < 1000 ? 8 : undefined);
  const [characterHovered, setCharacterHovered] = useState<undefined | number>(
    undefined,
  );
  const [sliderOpen, setSliderOpen] = useState(false);

  const targetDivRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <SectionTitle title="CHARACTERS" />
      <div className="flex justify-between">
        {charactersData.map((character) => {
          const isActualCharacterSelected = characterSelected === character.id;
          const isActualCharacterHovered = characterHovered === character.id;
          return (
            <div
              key={character.id}
              className={`relative transform cursor-pointer overflow-hidden transition-all duration-500 ease-in-out 
                ${
                  !isActualCharacterHovered &&
                  characterHovered &&
                  characterSelected === undefined
                    ? "flex-1"
                    : isActualCharacterSelected
                      ? "flex flex-1 justify-end"
                      : characterSelected
                        ? "flex-[0]"
                        : "flex-[2]"
                } 
                `}
              onMouseEnter={() => setCharacterHovered(character.id)}
              onMouseLeave={() => setCharacterHovered(undefined)}
              onClick={() =>
                !characterSelected && setCharacterSelected(character.id)
              }
              ref={targetDivRef}
            >
              <div className="absolute z-0 h-screen w-screen bg-[url('/assets/ui/backLabOp.png')] bg-[length:400px_400px] bg-repeat" />
              <div className="absolute h-full w-full bg-black opacity-35" />
              {/* When a the actual character selected */}
              {isActualCharacterSelected && (
                <CharacterSelectedDetails
                  character={character}
                  characterSelected={characterSelected}
                />
              )}
              {/* When a the actual character is not hovered but another is */}
              {!isActualCharacterHovered &&
                characterHovered &&
                characterSelected != undefined && (
                  <div className="absolute h-full w-full bg-black opacity-30" />
                )}
              <img
                src={character.imgFull}
                alt=""
                className={`absolute  transform  object-cover  transition-all duration-300 ease-in-out 
                  ${!characterSelected ? `${character.positionFullImg} bottom-0 h-[500px] ` : ""} 
                  ${isActualCharacterHovered || isActualCharacterSelected ? "scale-125" : ""} 
                  ${isActualCharacterSelected ? "top-20 h-[500px] animate-fadeIn xl:top-32 xl:h-[800px] " : ""} `}
              />
              <div
                className="absolute bottom-0 left-0 block cursor-pointer rounded-tr-xl bg-[#fcf9ddfb] p-2 md:hidden"
                onClick={() => setSliderOpen(true)}
              >
                <img src={charactersIcon} alt="" className="h-16" />
              </div>
              {/* When mobile CharaSlider si open*/}
              {sliderOpen && characterSelected && (
                <div className="w-fullmd:hidden absolute left-0 top-2 block h-full">
                  <CharactersSlider
                    characterSelected={characterSelected}
                    changeCharacter={setCharacterSelected}
                    handleClick={() => setSliderOpen(false)}
                    backButton={() => setSliderOpen(false)}
                  />
                </div>
              )}

              {/* When a the actual character hovered */}
              {isActualCharacterHovered && !characterSelected && (
                <div className="absolute left-0 right-0 top-14 m-auto text-4xl font-bold text-white">
                  {character.name}
                </div>
              )}
              <img
                src={character.imgBack}
                alt=""
                className="h-[500px] w-screen object-cover transition-transform duration-500 ease-in-out md:h-[700px]"
              />
            </div>
          );
        })}
      </div>
      {/* When character is selected : special responsive behavior */}
      {characterSelected != undefined && (
        <>
          <div className=" z-50 block w-full md:hidden lg:bottom-10 lg:left-20 lg:max-w-[600px]">
            <CharactersDescription characterSelected={characterSelected} />
          </div>
          <div className="hidden md:block">
            <CharactersSlider
              characterSelected={characterSelected}
              changeCharacter={setCharacterSelected}
              handleClick={handleClick}
            />
          </div>
        </>
      )}
    </div>
  );
};
