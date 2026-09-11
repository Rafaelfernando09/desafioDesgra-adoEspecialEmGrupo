import { Character } from "./Character";

export class Mage extends Character {
    public constructor(name: string, profession: string, health: number, attack: number, defense: number, gold: number){
        super(name,profession, health, attack, defense, gold)
    }
}