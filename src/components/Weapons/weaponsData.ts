import { weaponsImages } from "./weaponsImages";

export interface IWeapon {
  id: number;
  name: string;
  image: string;
  model: string;
  description: string;
}

export const weaponsData: IWeapon[] = [
  {
    id: 1,
    name: "Master Sword",
    image: weaponsImages.sword,
    model: "/assets/weapons/sword.glb",
    description:
      "The legendary sword that seals the darkness. It is the sword that seals the darkness that only the chosen hero can wield. It is said that the sword chooses its master, and only a true hero can wield it.",
  },
  {
    id: 2,
    name: "Hylian Shield",
    image: weaponsImages.shield,
    model: "/assets/weapons/shield.glb",
    description:
      "The shield passed down through the Hyrulean royal family. It is said that an ancient hero used this shield to save the world from the Calamity. It is imbued with the soul of the hero who has wielded it, and it is said that only the true hero can wield it.",
  },
  {
    id: 3,
    name: "Traveler's Bow",
    image: weaponsImages.bow,
    model: "/assets/weapons/bow.glb",
    description:
      "A simple bow used by travelers. It is easy to use and is suitable for beginners. It is a bow that is easy to handle and is suitable for beginners.",
  },
  {
    id: 4,
    name: "Boomerang",
    image: weaponsImages.boomerang,
    model: "/assets/weapons/boom.glb",
    description:
      "A boomerang that can be thrown to attack enemies. It is a weapon that can be thrown to attack enemies. It is a weapon that can be thrown to attack enemies.",
  },
];
