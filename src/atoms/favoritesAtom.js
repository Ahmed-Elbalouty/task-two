import { atom } from "recoil";

export const favoritesAtom = atom({
  key: "favorites",
  default: [],
});
