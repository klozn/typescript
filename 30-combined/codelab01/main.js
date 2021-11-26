"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cat_1 = require("./cat");
var dog_1 = require("./dog");
var human_1 = require("./human");
var ludo = new cat_1.Cat('Ludoviek', 3);
var chocotoff = new cat_1.Cat('Chocotoff', 7);
var mirza = new dog_1.Dog('Mirza', 9);
var cleo = new dog_1.Dog('Cleo', 12);
var hector = new dog_1.Dog('Hector', 2);
for (var i = 0; i < 9; i++) {
    chocotoff.die();
}
ludo.die();
console.log('Ludo is alive: ' + ludo.isAlive());
console.log('Chocotoff is alive:' + chocotoff.isAlive());
console.log('Mirza has been a good girl: ' + mirza.hasBeenGoodBoi());
console.log('Cleo has been a good boy: ' + cleo.hasBeenGoodBoi());
console.log('Hector has been a good girl: ' + hector.hasBeenGoodBoi());
var marcel = new human_1.Human('Marcel');
[ludo, chocotoff, mirza, cleo, hector].forEach(function (pet) { return marcel.addPet(pet); });
marcel.startlePets().forEach(function (sound) { return console.log(sound); });
