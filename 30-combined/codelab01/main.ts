import {Cat} from './cat';
import {Dog} from "./dog";
import {Human} from "./human";

const ludo: Cat = new Cat('Ludoviek', 3);
const chocotoff: Cat = new Cat('Chocotoff', 7);
const mirza: Dog = new Dog('Mirza', 9);
const cleo: Dog = new Dog('Cleo', 12);
const hector: Dog = new Dog('Hector', 2);

for (let i = 0; i < 9; i++) {
    chocotoff.die();
}
ludo.die();
console.log('Ludo is alive: ' + ludo.isAlive())
console.log('Chocotoff is alive:' + chocotoff.isAlive());
console.log('Mirza has been a good girl: ' + mirza.hasBeenGoodBoi());
console.log('Cleo has been a good boy: ' + cleo.hasBeenGoodBoi());
console.log('Hector has been a good girl: ' + hector.hasBeenGoodBoi());

const marcel = new Human('Marcel');

[ludo, chocotoff, mirza, cleo, hector].forEach(pet => marcel.addPet(pet));

marcel.startlePets().forEach(sound => console.log(sound));