import { charactersData } from "./CharactersData";
import { CharactersStats } from "./CharactersStats";

export const CharactersDescription: React.FC<{
  characterSelected: number;
}> = ({ characterSelected }) => {
  const character = charactersData[characterSelected - 1];
  return (
    <>
      {character && (
        <div className="animate-fadeIn rounded-none border-0 border-amber-400 p-0 md:rounded-xl md:border-2 md:p-1  ">
          <div
            className="rounded-none border-0
               border-amber-400 bg-gradient-to-tl from-slate-600 via-gray-600 to-slate-800 
                font-semibold text-white md:rounded-xl md:border-2 "
          >
            <div className=" z-50 flex flex-col items-center justify-center rounded-none bg-[url('/assets/ui/backSquareOp.png')] bg-[length:400px_400px] bg-repeat p-5 px-10 md:rounded-xl">
              <div className="text-4xl font-bold text-white">
                {character.name}
              </div>
              <div className="text-xl font-bold text-white">
                {character.status}
              </div>
              <div className="text-xl font-bold text-white">
                {character.race}
              </div>
              <div className="text-lg font-bold text-slate-200">
                {character.description}
              </div>
              <div className="mt-10 h-full">
                <CharactersStats character={character} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
