import {Pet} from './pet';

export class Cat extends Pet {
    private amountOfLives: number = 9;


    constructor(name: string, age: number) {
        super(name, age);
    }

    die(): void {
        if (this.amountOfLives > 0) {
            this.amountOfLives--;
        }
    }

    isAlive(): boolean {
        return this.amountOfLives > 0;
    }
}