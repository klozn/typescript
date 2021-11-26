"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human(name) {
        this._pets = [];
        this._name = name;
    }
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "pets", {
        get: function () {
            return this._pets;
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.startlePets = function () {
        var sounds = [];
        this._pets.forEach(function (pet) { return sounds.push(pet.makeSound()); });
        return sounds;
    };
    Human.prototype.addPet = function (pet) {
        this._pets.push(pet);
    };
    return Human;
}());
exports.Human = Human;
