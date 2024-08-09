import { Vector3, Euler } from "@react-three/fiber";

export interface IStoryStep {
  step: number;
  description: string;
  position: Vector3;
  rotation: Euler;
}

export const storyDataStep: IStoryStep[] = [
  {
    step: 1,
    description: "Story 1",
    position: [-14.786827590543274, 2.950048629180348, -0.032584830688351385],
    rotation: [
      0.14366949913569418,
      0.644313918647212,
      -0.08667605955113201,
      "XYZ",
    ],
  },
  {
    step: 2,
    description: "Story 2",
    position: [-11.648623704700018, 2.4146339087271578, -2.756360513596796],
    rotation: [
      0.22778881865428705,
      0.47447790182054644,
      -0.10551562946020454,
      "XYZ",
    ],
  },
  {
    step: 3,
    description: "",
    position: [-7.54601733863846, 1.9981693647384742, -4.630863365976491],
    rotation: [
      0.2874032422760445,
      0.2517988473718634,
      -0.07351174882036547,
      "XYZ",
    ],
  },
  {
    step: 4,
    description: "",
    position: [-1.6317506073187422, 1.316776627132362, -4.29830221032813],
    rotation: [
      0.2890625749350241,
      -0.015032162255614592,
      0.0044702491991231354,
      "XYZ",
    ],
  },
  {
    step: 5,
    description: "",
    position: [8.456081806797382, 2.077688236162243, -4.892413515291642],
    rotation: [
      0.31749611714960546,
      -0.2884758530465083,
      0.0932165868416327,
      "XYZ",
    ],
  },
];
