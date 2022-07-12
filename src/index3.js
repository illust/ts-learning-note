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
var A1 = /** @class */ (function () {
    function A1() {
        this.sex = "male";
    }
    A1.prototype.say = function () {
        console.log("say");
    };
    return A1;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person.prototype.hi = function () {
        console.log("hi");
    };
    return Person;
}(A1));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 28;
        return _this;
    }
    Human.prototype.hi2 = function (num) {
        return num + 1;
    };
    return Human;
}(Person));
var sun = new Human();
console.log(sun.age);
