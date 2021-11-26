import {Pet} from "./pet";

export class Human {
    private readonly _name: string;
    private _pets: Pet[] = [];

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }


    get pets(): Pet[] {
        return this._pets;
    }

    startlePets(): string[] {
        let sounds = [];
        this._pets.forEach(pet => sounds.push(pet.makeSound()));
        return sounds;
    }

    addPet(pet: Pet): void {
        this._pets.push(pet);
    }
}