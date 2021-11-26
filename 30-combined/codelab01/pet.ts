export abstract class Pet {
    private readonly _name: string;
    private readonly _age: number;


    protected constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }


    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    makeSound(): string {
        return `${this._name} is my name and I'm a pet.`;
    }
}