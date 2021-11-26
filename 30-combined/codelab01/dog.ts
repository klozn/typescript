import {Pet} from "./pet";

export class Dog extends Pet {


    constructor(name: string, age: number) {
        super(name, age);
    }

    hasBeenGoodBoi(): boolean {
        if (this.name.charAt(0).match(/[abc]/gi)) {
            return true;
        }
        return this.name.length === 5;
    }
}