import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { ICharacterData } from "./CharactersData";

export const CharactersStats: React.FC<{ character: ICharacterData }> = ({
  character,
}) => {
  const data = [
    {
      subject: "Vitality",
      value: character.vitality,
    },
    {
      subject: "Strenght",
      value: character.strength,
    },
    {
      subject: "Speed",
      value: character.speed,
    },
    {
      subject: "Inteligence",
      value: character.inteligence,
    },
    {
      subject: "Magic",
      value: character.magic,
    },
  ];

  return (
    <RadarChart
      cx="50%"
      cy="50%"
      outerRadius="80%"
      data={data}
      height={220}
      width={310}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis domain={[0, 10]} tick={false} angle={18} />
      <Radar
        max={10}
        dataKey="value"
        stroke={character.color}
        fill={character.color}
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};
