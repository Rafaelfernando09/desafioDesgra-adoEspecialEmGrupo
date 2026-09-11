import { Character } from "../Character";

export interface Usable {
    use(target: Character): void;
}
