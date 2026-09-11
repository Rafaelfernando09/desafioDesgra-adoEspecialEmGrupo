import { Character } from "../Character";

export interface Equippable {
    equip(character: Character): void;
    unequip(character: Character): void;
}