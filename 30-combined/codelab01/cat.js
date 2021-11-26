"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
var pet_1 = require("./pet");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.amountOfLives = 9;
        return _this;
    }
    Cat.prototype.die = function () {
        if (this.amountOfLives > 0) {
            this.amountOfLives--;
        }
    };
    Cat.prototype.isAlive = function () {
        return this.amountOfLives > 0;
    };
    return Cat;
}(pet_1.Pet));
exports.Cat = Cat;
