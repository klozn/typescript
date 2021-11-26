"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
var Pet = /** @class */ (function () {
    function Pet(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Pet.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Pet.prototype.makeSound = function () {
        return "".concat(this._name, " is my name and I'm a pet.");
    };
    return Pet;
}());
exports.Pet = Pet;
